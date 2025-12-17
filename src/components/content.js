import React from "react"
import Spacer from "./spacer"
import { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function ContentBlocks({ blocks }) {
    if (!blocks?.length) return null
    return (
        <div className='flex flex-col gap-10'>
            {blocks.map((block, i) => (
                <ContentBlock key={i} block={block} />
            ))}
        </div>
    )
}

function ContentBlock({ block }) {
    switch (block.__typename) {
        case "DatoCmsFullWidthAssetBlock":
            return <FullWidthAsset asset={block.asset} />
        case "DatoCmsTextAndImageBlock":
            return <TextAndImage content={block.content} asset={block.asset} reverse={block.reverse} />
        case "DatoCmsContentBlock":
            return <ContentText content={block.content} />
        case "DatoCmsTwoImagesBlock":
            return <TwoImages imageOne={block.imageOne} imageTwo={block.imageTwo} />
        default:
            return null
    }
}

function FullWidthAsset({ asset }) {
    if (!asset) return null
    return (
        <div className="p10 pt0 pb0">
            <div className='ratio-16-10 pos-rel overflow'>
                <MediaAsset video={asset.video} image={asset.image} />
            </div>
        </div>
    )
}

function TextAndImage({ content, asset, reverse }) {
    return (
        <div className='grid-2 gap-10 p10 pt0 pb0'>
            <div className={`ratio-2-3 pos-rel overflow ${reverse ? "order-2 m-order-reset" : ""}`}>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
            <div className={`flex  ${reverse ? "order-1 m-order-reset" : ""}`}>
                <h2 className='h2 sticky top-50 mba'>{content}</h2>
            </div>
        </div>
    )
}

function ContentText({ content }) {
    return (
        <div>
            <div className='p10'>
                <h2 className='h2'>{content}</h2>
            </div>
            <Spacer />
            <Spacer />
        </div>
    )
}

function TwoImages({ imageOne, imageTwo }) {
    return (
        <div className='grid-2 gap-10'>
            {imageOne && (
                <div className={`${getAspectRatioClass(imageOne.aspectRatio)} pos-rel overflow`}>
                    <MediaAsset video={imageOne.assetField?.video} image={imageOne.assetField?.image} />
                </div>
            )}
            {imageTwo && (
                <div className={`${getAspectRatioClass(imageTwo.aspectRatio)} pos-rel overflow`}>
                    <MediaAsset video={imageTwo.assetField?.video} image={imageTwo.assetField?.image} />
                </div>
            )}
        </div>
    )
}

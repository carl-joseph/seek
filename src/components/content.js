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
            return <TextAndImage content={block.content} caption={block.caption} asset={block.asset} reverse={block.reverse} />
        case "DatoCmsContentBlock":
            return <ContentText content={block.content} />
        case "DatoCmsTwoImagesBlock":
            return <TwoImages imageOne={block.imageOne} imageTwo={block.imageTwo} />
        case "DatoCmsTitleContentBlock":
            return <TitleContent title={block.title} content={block.content} />
        case "DatoCmsContentImageBlock":
            return <ContentImage title={block.title} content={block.content} asset={block.asset} />
        default:
            return null
    }
}

function FullWidthAsset({ asset }) {
    if (!asset) return null
    return (
        <div className='p10 pt0 pb0'>
            <div className='ratio-16-10 bg-grey pos-rel overflow'>
                <MediaAsset video={asset.video} image={asset.image} />
            </div>
        </div>
    )
}

function TextAndImage({ content, caption, asset, reverse }) {
    return (
        <div className='grid-2 gap-10 p10 pt0 pb0'>
            <div className={`ratio-2-3 bg-grey pos-rel overflow ${reverse ? "order-2 m-order-reset" : ""}`}>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
            <div className={`flex flex-col gap-40 ${reverse ? "order-1 m-order-reset" : ""}`}>
                <div className={caption ? "flex-1 " : ""}>
                    <h2 className='h2 sticky top-50'>{content}</h2>
                </div>
                {caption && <p className='f-20' dangerouslySetInnerHTML={{ __html: caption }} />}
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
                <div className={`${getAspectRatioClass(imageOne.aspectRatio)} bg-grey pos-rel overflow`}>
                    <MediaAsset video={imageOne.assetField?.video} image={imageOne.assetField?.image} />
                </div>
            )}
            {imageTwo && (
                <div className={`${getAspectRatioClass(imageTwo.aspectRatio)} bg-grey pos-rel overflow`}>
                    <MediaAsset video={imageTwo.assetField?.video} image={imageTwo.assetField?.image} />
                </div>
            )}
        </div>
    )
}

function TitleContent({ title, content }) {
    return (
        <div className='grid-2 gap-10  p10 pt0 pb0'>
            <h2 className='h2 mt10 op-50'>{title}</h2>
            <div className='f-20 mt10 gerstner fw-300 flex flex-col gap-20' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

function ContentImage({ title, content, asset }) {
    return (
        <div className='p10 pt0 pb0'>
            <h2 className='h2 mt10 mb-40'>{title}</h2>
            <div className='grid-2 gap-10'>
                <div />
                <div className="flex flex-col gap-40">
                    <div className='f-20 flex flex-col gap-20' dangerouslySetInnerHTML={{ __html: content }} />
                    <div className='ratio-4-3 bg-grey pos-rel overflow'>
                        <MediaAsset video={asset?.video} image={asset?.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react"
import SectionHeader, { MediaAsset } from "./sectionHeader"

export default function FeaturedProject({ title, caption, buttonText, projectLink, assetField }) {
    return (
        <div className='bt-1'>
            <SectionHeader title={title} caption={caption} buttonText={buttonText} buttonLink={`/projects/${projectLink.slug}`} />
            <div className='p10'>
                <div className='ratio-16-10 pos-rel overflow'>
                    <MediaAsset video={assetField?.video} image={assetField?.image} alt={title} />
                </div>
            </div>
        </div>
    )
}

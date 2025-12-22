import React from "react"
import { MediaAsset } from "./sectionHeader"

export default function JournalHero({ title, category, asset }) {
    return (
        <div className='p10'>
            {category && <p className='gerstner fw-300 op-50 text-center mb10'>{category}</p>}
            <h1 className='h0 large text-center mb-20'>{title}</h1>
            <div className='ratio-16-10 bg-grey pos-rel overflow'>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
        </div>
    )
}

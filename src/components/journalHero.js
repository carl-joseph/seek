import React from "react"
import { MediaAsset } from "./sectionHeader"

export default function JournalHero({ title, asset }) {
    return (
        <div className='p10'>
            <h1 className='h1 text-center mb-20'>{title}</h1>
            <div className='ratio-16-10 pos-rel overflow'>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
        </div>
    )
}

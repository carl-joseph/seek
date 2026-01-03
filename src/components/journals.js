import React from "react"
import { Link } from "gatsby"
import { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function Journals({ journals }) {
    if (!journals?.length) return null
    return (
        <div className='p10 grid grid-4 gap-10 row-80'>
            {journals.map((journal, i) => (
                <JournalCard key={i} journal={journal} />
            ))}
        </div>
    )
}

function JournalCard({ journal }) {
    return (
        <Link to={`/journal/${journal.slug}`} className='link'>
            <div className={`${getAspectRatioClass(journal.assetContent?.aspectRatio)} pos-rel overflow image--zoom`}>
                <MediaAsset video={journal.assetContent?.assetField?.video} image={journal.assetContent?.assetField?.image} />
            </div>
            <h3 className='mt10'>{journal.previewTitle}</h3>
        </Link>
    )
}

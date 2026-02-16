import React from "react"
import { Link } from "gatsby"
import { MediaAsset, Arrow } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function Journals({ journals }) {
    if (!journals?.length) return null
    return (
        <div className='p10 grid grid-4 m-grid-1 gap-10 row-80'>
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
            <div className='flex space-between align-start mt10 gerstner m-16 f-18'>
                <div>
                    <h3>{journal.previewTitle}</h3>
                    {journal.date && <p className=''>{journal.date}</p>}
                </div>
                {journal.category?.title && (
                    <span className='btn-arrow'>{journal.category.title} <Arrow /></span>
                )}
            </div>
        </Link>
    )
}

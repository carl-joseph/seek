import React from "react"
import { Link } from "gatsby"
import { MediaAsset, Arrow } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"
import Spacer from "./spacer"

export default function RelatedJournals({ journals }) {
    if (!journals?.length) return null
    return (
        <div className='p10'>
            <Spacer />
            <Spacer />
            <p className='gerstner f-20 mb10'>Related Articles</p>
            <div className='grid-2 gap-10'>
                {journals.map((journal, i) => (
                    <RelatedJournalCard key={i} journal={journal} />
                ))}
            </div>
        </div>
    )
}

function RelatedJournalCard({ journal }) {
    return (
        <Link to={`/journal/${journal.slug}`} className='link'>
            <div className={`${getAspectRatioClass(journal.assetContent?.aspectRatio)} pos-rel overflow image--zoom`}>
                <MediaAsset video={journal.assetContent?.assetField?.video} image={journal.assetContent?.assetField?.image} />
            </div>
            <div className='flex space-between align-start mt10 gerstner f-14'>
                <div>
                    <h3>{journal.previewTitle}</h3>
                    {journal.date && <p>{journal.date}</p>}
                </div>
                {journal.category?.title && (
                    <span className='btn-arrow mba'>{journal.category.title} <Arrow /></span>
                )}
            </div>
        </Link>
    )
}

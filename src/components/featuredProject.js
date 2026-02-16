import React from "react"
import { Link } from "gatsby"
import { Arrow, MediaAsset } from "./sectionHeader"

export default function FeaturedProject({ title, caption, buttonText, projectLink, assetField }) {
    const link = `/projects/${projectLink.slug}`
    return (
        <div className=''>
            <div className='flex gap-20 text-lg p10 py20'>
                <div className='max-180 w-100 m-hide'></div>
                <div className='max-300 w-100'>{caption}</div>
                <Link to={link} className='link mla btn-arrow max-300 w-100 m-wa justify-end shrink-0'>{buttonText} <Arrow /></Link>
            </div>
            <div className='p10'>
                <Link to={link} className='link'><h2 className='h0 large'>{title}</h2></Link>
            </div>
            <div className='p10'>
                <div className='ratio-16-10 pos-rel overflow'>
                    <MediaAsset video={assetField?.video} image={assetField?.image} alt={title} />
                </div>
            </div>
        </div>
    )
}

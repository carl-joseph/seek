import React, { useState } from "react"
import { Link } from "gatsby"
import { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function Journal({ journals }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = e => setMousePos({ x: e.clientX, y: e.clientY })

    if (!journals?.length) return null

    return (
        <div className='mh-100vh pos-rel flex flex-col align-center justify-center' onMouseMove={handleMouseMove}>
            <div className='gerstner f-20 text-center mb40 p10 fade--in' data-sal>Journal</div>
            <div className='flex flex-col mb40 gap-40 p10 text-center align-center justify-center h-100 journal-titles'>
                {journals.map((journal, i) => (
                    <div className='fade--in' data-sal>
                        <Link key={i} to={`/journal/${journal.slug}`} className={`journal-title ${hoveredIndex === i ? "active" : ""}`} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                            {journal.category?.title && <span className='gerstner f-18 fw-300 op-50'>{journal.category.title}</span>}
                            <span className='h0 large'>{journal.previewTitle}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <CursorImage active={hoveredIndex !== null} asset={journals[hoveredIndex]?.assetContent?.assetField} aspectRatio={journals[hoveredIndex]?.assetContent?.aspectRatio} mousePos={mousePos} />
        </div>
    )
}

function CursorImage({ asset, aspectRatio, mousePos, active }) {
    return (
        <div
            className={`cursor-image ${active ? "active" : ""}`}
            style={{ left: mousePos.x, top: mousePos.y + 40, transform: "translateX(-50%)",}}>
            <div className={`${getAspectRatioClass(aspectRatio)} pos-rel overflow`}>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
        </div>
    )
}

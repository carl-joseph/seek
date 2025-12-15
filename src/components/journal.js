import React, { useState } from "react"
import { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function Journal({ journals }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = e => setMousePos({ x: e.clientX, y: e.clientY })

    if (!journals?.length) return null

    return (
        <div className='h-100vh pos-rel flex flex-col' onMouseMove={handleMouseMove}>
            <div className='text-lg text-center p10'>Journal</div>
            <div className='flex flex-col gap-20 align-center justify-center h-100 journal-titles'>
                {journals.map((journal, i) => (
                    <div key={i} className={`h0 journal-title ${hoveredIndex === i ? "active" : ""}`} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                        {journal.previewTitle}
                    </div>
                ))}
            </div>
            {hoveredIndex !== null && journals[hoveredIndex]?.assetContent?.assetField && <CursorImage asset={journals[hoveredIndex].assetContent.assetField} aspectRatio={journals[hoveredIndex].assetContent.aspectRatio} mousePos={mousePos} />}
        </div>
    )
}

function CursorImage({ asset, aspectRatio, mousePos }) {
    return (
        <div
            className='cursor-image'
            style={{
                left: mousePos.x,
                top: mousePos.y + 40,
                transform: "translateX(-50%)",
            }}>
            <div className={`${getAspectRatioClass(aspectRatio)} pos-rel overflow`}>
                <MediaAsset video={asset?.video} image={asset?.image} />
            </div>
        </div>
    )
}

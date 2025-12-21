import React from "react"
import { Link } from "gatsby"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { Arrow, MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function MixedWork({ title, work }) {
    const doubledWork = [...(work || []), ...(work || [])]

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
    )

    if (!work?.length) return null

    return (
        <div className='p10'>
            <h1 className='h1 mb-40'>{title}</h1>
            <div className='embla' ref={emblaRef}>
                <div className='embla-container'>
                    {doubledWork.map((item, i) => (
                        <WorkItem key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function WorkItem({ item }) {
    const asset = item.assetContent?.assetField
    const aspectRatio = item.assetContent?.aspectRatio

    return (
        <div className='embla-slide cursor-grab'>
            <div className={`${getAspectRatioClass(aspectRatio)} pos-rel overflow`}>
                <MediaAsset video={asset?.video} image={asset?.image} alt={item.title} />
            </div>
            <div className='flex space-between mt10'>
                <span className='text-lg'>{item.title}</span>
                <Link to={item.link || "#"} className='link btn-arrow text-lg'>
                    View Project
                    <Arrow />
                </Link>
            </div>
        </div>
    )
}

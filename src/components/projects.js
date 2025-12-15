import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Spacer from "./spacer"
import SectionHeader, { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"
import "swiper/css"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Projects({ projects, alt }) {
    if (!projects?.length) return null
    return (
        <div className='flex flex-col gap-40'>
            {projects.map((project, i) => (
                <ProjectItem key={i} project={project} index={i} />
            ))}
            {!alt && (
                <>
                    <Spacer />
                    <Link to='/projects' className='text-lg op-link inverse text-center link'>
                        View All Projects
                    </Link>
                    <Spacer />
                </>
            )}
        </div>
    )
}

function ProjectItem({ project, index }) {
    const containerRef = useRef(null)
    const swiperRef = useRef(null)
    const progressRef = useRef(0)
    const scrollProgressRef = useRef(0)
    const isOdd = index % 2 !== 0
    const autoScrollSpeed = isOdd ? -0.0003 : 0.0002
    const doubledMedia = [...(project.previewMedia || []), ...(project.previewMedia || [])]

    useGSAP(
        () => {
            if (!swiperRef.current || !containerRef.current) return

            const swiper = swiperRef.current

            const ticker = () => {
                progressRef.current += autoScrollSpeed
                const scrollOffset = isOdd ? -scrollProgressRef.current : scrollProgressRef.current
                const totalProgress = (((progressRef.current + scrollOffset) % 1) + 1) % 1
                swiper.setProgress(totalProgress, 0)
            }

            gsap.ticker.add(ticker)

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "50% bottom",
                end: "80% top",
                scrub: true,
                onUpdate: self => {
                    scrollProgressRef.current = self.progress
                },
            })

            return () => gsap.ticker.remove(ticker)
        },
        { dependencies: [autoScrollSpeed], scope: containerRef }
    )

    return (
        <div ref={containerRef} className='bt-1'>
            <SectionHeader title={project.previewTitle} caption={project.previewDescription} buttonText='View Brand' buttonLink={`/projects`} />
            <Swiper onSwiper={swiper => (swiperRef.current = swiper)} modules={[FreeMode]} slidesPerView={4} spaceBetween={5} loop freeMode className='project-swiper'>
                {doubledMedia.map((media, i) => (
                    <SwiperSlide key={i}>
                        <div className={`${getAspectRatioClass(media.aspectRatio, "ratio-4-3")} pos-rel overflow`}>
                            <MediaAsset video={media.assetField?.video} image={media.assetField?.image} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

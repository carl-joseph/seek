import { Link } from "gatsby"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionHeader, { MediaAsset } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"
import Spacer from "./spacer"
import gsap from "gsap"
import "swiper/css"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Projects({ projects, alt }) {
    if (!projects?.length) return null
    return (
        <div className='flex flex-col gap-40'>
            {projects.map((project, i) => (
                <ProjectItem key={i} project={project} index={i} />
            ))}
            {!alt && <ViewAll />}
        </div>
    )
}

const ViewAll = () => {
    return (
        <>
            <Spacer />
            <div className='fade--in flex' data-sal><Link to='/projects' className='text-lg ma op-link inverse text-center link'>View All Projects</Link></div>
            <Spacer />
        </>
    )
}

function ProjectItem({ project, index }) {
    const containerRef = useRef(null)
    const swiperRef = useRef(null)
    const progressRef = useRef(0)
    const scrollProgressRef = useRef(0)
    const isOdd = index % 2 !== 0
    const SCROLL_INFLUENCE = 0.15
    const autoScrollSpeed = isOdd ? -0.00012 : 0.00008
    const doubledMedia = [...(project.previewMedia || []), ...(project.previewMedia || [])]

    useGSAP(
      () => {
        if (!swiperRef.current || !containerRef.current) return

        let isDesktop = false
        const mm = gsap.matchMedia()

        mm.add("(min-width: 768px)", () => {
          isDesktop = true
          return () => {
            isDesktop = false
          }
        })

        const swiper = swiperRef.current

        const ticker = () => {
          progressRef.current += autoScrollSpeed

          const scrollInfluence = isDesktop
            ? gsap.parseEase("power2.out")(scrollProgressRef.current) * SCROLL_INFLUENCE
            : 0

          const scrollOffset = (isOdd ? -1 : 1) * scrollInfluence
          const totalProgress = (((progressRef.current + scrollOffset) % 1) + 1) % 1

          swiper.setProgress(totalProgress, 0)
        }

        gsap.ticker.add(ticker)

        const trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom+=20%",
          end: "bottom top-=20%",
          scrub: true,
          onUpdate: self => {
            scrollProgressRef.current = self.progress
          },
        })

        return () => {
          gsap.ticker.remove(ticker)
          trigger.kill()
          mm.revert()
        }
      },
      { dependencies: [autoScrollSpeed], scope: containerRef }
    )

    return (
        <div ref={containerRef} className='bt-1'>
            <SectionHeader title={project.previewTitle} caption={project.previewDescription} buttonText='View Brand' buttonLink={`/projects/${project.slug}`} />
            <Swiper onSwiper={swiper => (swiperRef.current = swiper)} modules={[FreeMode]} slidesPerView={4} breakpoints={{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 4 } }} spaceBetween={5} loop freeMode className='project-swiper'>
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

import React, { useState, useMemo, useRef } from "react"
import ProjectsGrid from "./projectsGrid"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { CloseIcon } from "./closeIcon"

gsap.registerPlugin(useGSAP)

export default function ProjectsFilter({ projects }) {
    const [activeFilter, setActiveFilter] = useState("All")
    const [displayedFilter, setDisplayedFilter] = useState("All")
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const listRef = useRef(null)
    const triggerRef = useRef(null)
    const barRef = useRef(null)
    const prevIsFilterOpen = useRef(false)

    const sectors = useMemo(() => {
        const allSectors = projects.flatMap(p => p.sector?.map(s => s.title) || [])
        const uniqueSectors = [...new Set(allSectors.filter(Boolean))]
        return ["All", ...uniqueSectors]
    }, [projects])

    const filteredProjects = useMemo(() => {
        if (displayedFilter === "All") return projects
        return projects.filter(p => p.sector?.some(s => s.title === displayedFilter))
    }, [projects, displayedFilter])

    const onClick = sector => {
        if (sector === activeFilter) return

        setActiveFilter(sector)

        gsap.to(listRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                setDisplayedFilter(sector)
                gsap.to(listRef.current, { opacity: 1, duration: 0.6 })
            },
        })
    }

    useGSAP(
        () => {
            if (!triggerRef.current || !barRef.current) return

            const wasOpen = prevIsFilterOpen.current
            prevIsFilterOpen.current = isFilterOpen
            if (!wasOpen && !isFilterOpen) return

            const tl = gsap.timeline()

            if (isFilterOpen) {
                tl.to(triggerRef.current, { opacity: 0, duration: 0.2 }).to(barRef.current, { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" })
                return () => tl.kill()
            }

            tl.to(barRef.current, { opacity: 0, x: 0, duration: 0.35, ease: "power2.inOut" }).to(triggerRef.current, { opacity: 1, duration: 0.2 })

            return () => tl.kill()
        },
        { dependencies: [isFilterOpen], scope: barRef }
    )

    return (
        <>
            <div className='projects-filter p10'>
                <button className='projects-filter-trigger text-lg' onClick={() => setIsFilterOpen(true)} type='button' ref={triggerRef} aria-expanded={isFilterOpen} aria-controls='projects-filter-bar'>
                    Filter by
                </button>
                <div className={`projects-filter-bar ${isFilterOpen ? "active" : ""}`} ref={barRef} id='projects-filter-bar'>
                    <div className='projects-filter-scroll flex gap-5 text-lg'>
                        {sectors.map((sector, i) => (
                            <button key={sector} onClick={() => onClick(sector)} className={`${activeFilter === sector ? "" : "op-50"} filter`} type='button'>
                                {sector}
                                {i < sectors.length - 1 && ","}
                            </button>
                        ))}
                    </div>
                    <button className='projects-filter-close' onClick={() => setIsFilterOpen(false)} type='button' aria-label='Close filters'>
                        <CloseIcon />
                    </button>
                </div>
            </div>
            <div ref={listRef} className=''>
                <ProjectsGrid projects={filteredProjects} />
            </div>
        </>
    )
}

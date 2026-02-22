import React, { useState, useMemo, useRef } from "react"
import Journals from "./journals"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { CloseIcon } from "./closeIcon"

gsap.registerPlugin(useGSAP)

export default function JournalsFilter({ journals }) {
    const [activeFilter, setActiveFilter] = useState("All")
    const [displayedFilter, setDisplayedFilter] = useState("All")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const listRef = useRef(null)
    const triggerRef = useRef(null)
    const barRef = useRef(null)
    const prevIsFilterOpen = useRef(false)
    const categories = useMemo(() => {
        const allCategories = journals.map(j => j.category?.title).filter(Boolean)
        const uniqueCategories = [...new Set(allCategories)]
        return ["All", ...uniqueCategories]
    }, [journals])

    const filteredJournals = useMemo(() => {
        if (displayedFilter === "All") return journals
        return journals.filter(j => j.category?.title === displayedFilter)
    }, [journals, displayedFilter])

    const onClick = category => {
        if (category === activeFilter) return
        setActiveFilter(category)
        gsap.to(listRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                setDisplayedFilter(category)
                gsap.to(listRef.current, { opacity: 1, duration: 0.5 })
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
            tl.to(barRef.current, { opacity: 0, x: 0, duration: 0.35, ease: "power2.inOut" }).to(triggerRef.current, { opacity: 1, duration: 0.35 })
            return () => tl.kill()
        },
        { dependencies: [isFilterOpen], scope: barRef }
    )

    return (
        <>
            <div className='projects-filter p10'>
                <button className='projects-filter-trigger text-lg' onClick={() => setIsFilterOpen(true)} type='button' ref={triggerRef} aria-expanded={isFilterOpen} aria-controls='journals-filter-bar'>Filter by</button>
                <div className={`projects-filter-bar ${isFilterOpen ? "active" : ""}`} ref={barRef} id='journals-filter-bar'>
                    <div className='projects-filter-scroll flex gap-5 text-lg'>
                        {categories.map((category, i) => (
                            <button key={category} onClick={() => onClick(category)} className={`${activeFilter === category ? "" : "op-50"} filter`} type='button'>
                                {category}{i < categories.length - 1 && ","}
                            </button>
                        ))}
                    </div>
                    <button className='projects-filter-close' onClick={() => setIsFilterOpen(false)} type='button' aria-label='Close filters'>
                        <CloseIcon />
                    </button>
                </div>
            </div>
            <div ref={listRef}>
                <Journals journals={filteredJournals} />
            </div>
        </>
    )
}

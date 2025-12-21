import React, { useState, useMemo, useRef } from "react"
import Projects from "./projects"
import gsap from "gsap"

export default function ProjectsFilter({ projects }) {
    const [activeFilter, setActiveFilter] = useState("All")
    const [displayedFilter, setDisplayedFilter] = useState("All")

    const listRef = useRef(null)

    const sectors = useMemo(() => {
        const allSectors = projects.flatMap(p => p.sector?.map(s => s.title) || [])
        const uniqueSectors = [...new Set(allSectors.filter(Boolean))]
        return ["All", ...uniqueSectors]
    }, [projects])

    const filteredProjects = useMemo(() => {
      if (displayedFilter === "All") return projects
      return projects.filter(p =>
        p.sector?.some(s => s.title === displayedFilter)
      )
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


    return (
        <>
            <div className='p10'>
                <div className='flex gap-5 text-lg flex-wrap'>
                    {sectors.map((sector, i) => (
                        <button key={sector} onClick={() => onClick(sector)} className={`${activeFilter === sector ? "" : "op-50"} filter`}>
                            {sector}{i < sectors.length - 1 && ","}
                        </button>
                    ))}
                </div>
            </div>
            <div ref={listRef}>
                <Projects projects={filteredProjects} alt />
            </div>
        </>
    )
}

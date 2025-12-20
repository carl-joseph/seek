import React, { useState, useMemo } from "react"
import Projects from "./projects"

export default function ProjectsFilter({ projects }) {
    const [activeFilter, setActiveFilter] = useState("All")

    const sectors = useMemo(() => {
        const allSectors = projects.flatMap(p => p.sector?.map(s => s.title) || [])
        const uniqueSectors = [...new Set(allSectors.filter(Boolean))]
        return ["All", ...uniqueSectors]
    }, [projects])

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects
        return projects.filter(p => p.sector?.some(s => s.title === activeFilter))
    }, [projects, activeFilter])

    return (
        <>
            <div className='p10'>
                <div className='flex gap-5 text-lg'>
                    {sectors.map((sector, i) => (
                        <button key={sector} onClick={() => setActiveFilter(sector)} className={`${activeFilter === sector ? "" : "op-50"} filter`}>
                            {sector}{i < sectors.length - 1 && ","}
                        </button>
                    ))}
                </div>
            </div>
            <Projects projects={filteredProjects} alt />
        </>
    )
}

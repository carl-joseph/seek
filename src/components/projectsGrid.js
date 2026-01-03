import React from "react"
import { Link } from "gatsby"
import { MediaAsset, Arrow } from "./sectionHeader"
import { getAspectRatioClass } from "./utils"

export default function ProjectsGrid({ projects }) {
    if (!projects?.length) return null
    return (
        <div className='p10 grid-3 m-col-1 row-gap-60 m-gap-40 bt-1'>
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </div>
    )
}

function ProjectCard({ project }) {
    const firstMedia = project.previewMedia?.[0]
    return (
        <Link to={`/projects/${project.slug}`} className='link'>
            <div className={`${getAspectRatioClass(firstMedia?.aspectRatio)} pos-rel overflow image--zoom`}>
                <MediaAsset video={firstMedia?.assetField?.video} image={firstMedia?.assetField?.image} />
            </div>
            <div className='flex space-between align-center mt10 f-18 gerstner'>
                <span>{project.previewTitle}</span>
                <span className='btn-arrow'>View Project <Arrow /></span>
            </div>
        </Link>
    )
}

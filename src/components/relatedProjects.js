import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Spacer from "./spacer"

export default function RelatedProjects({ projects }) {
    if (!projects?.length) return null
    return (
        <div className='p10'>
            <Spacer />
            <p className='gerstner mb10'>Related Projects</p>
            <div className='grid-2 gap-10'>
                {projects.map((project, i) => (
                    <RelatedProjectItem key={i} project={project} />
                ))}
            </div>
        </div>
    )
}

function RelatedProjectItem({ project }) {
    return (
        <Link to={`/projects/${project.slug}`} className='link'>
            <div className='ratio-16-9 pos-rel overflow'>
                {project.heroAsset?.image && <GatsbyImage className='bg-image' image={project.heroAsset.image.gatsbyImageData} alt={project.title} />}
                {project.heroAsset?.video && <video className='bg-image' src={project.heroAsset.video} autoPlay muted loop playsInline />}
            </div>
            <div className='mt10 text-lg'>{project.title}</div>
        </Link>
    )
}

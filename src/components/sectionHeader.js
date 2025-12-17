import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function SectionHeader({ title, caption, buttonText, buttonLink }) {
    return (
        <div className='flex text-lg p20'>
            <Link to={buttonLink || "#"} className='max-300 m-wa w-100'>{title}</Link>
            {caption && <div className='max-300 m-hide  w-100'>{caption}</div>}
            <Link to={buttonLink || "#"} className='link mla btn-arrow max-300 w-100 m-wa justify-end'>
                {buttonText} <Arrow />
            </Link>
        </div>
    )
}

export function Arrow() {
    return (
        <svg width='12' height='14' viewBox='0 0 14 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.0098 8.08838L0 16.1769L0 0L14.0098 8.08838Z' fill='white' />
        </svg>
    )
}

export function MediaAsset({ video, image, alt = "" }) {
    if (video) return <video className='bg-image' src={video} autoPlay muted loop playsInline />
    if (image?.gatsbyImageData) return <GatsbyImage className='bg-image' image={image.gatsbyImageData} alt={alt} />
    return null
}

import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function HeroBanner({ image, video }) {
  return (
    <div className='h-100vh bg-grey pos-rel'>
      {video && <video src={video} autoPlay muted loop playsInline className='bg-fixed' />}
      {image && <GatsbyImage image={image.gatsbyImageData} alt='hero' className='bg-fixed' />}
    </div>
  )
}

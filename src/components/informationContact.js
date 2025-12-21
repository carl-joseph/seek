import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Spacer from "./spacer"

export const InformationContact = ({ email, phone, instagram, linkedin, address, image }) => {
    return (
        <div>
            <p className='f-20 gerstner f-500 bb-1 pb10 mb10 fade--in' data-sal>Contact</p>
            <div className='pt10 flex flex-col'>
                <div className='flex gap-40 mb40 fade--in' data-sal>
                    <p className='f-20 gerstner f-500 min-100'>General</p>
                    <p className='f-20 gerstner fw-300 max-280 balance'>{email}</p>
                </div>
                <div className='flex gap-40 fade--in' data-sal>
                    <p className='f-20 gerstner f-500 min-100'>Tel</p>
                    <p className='f-20 gerstner fw-300 max-280 balance'>{phone}</p>
                </div>
                <div className='flex gap-40 mb40 fade--in' data-sal>
                    <p className='f-20 gerstner f-500 min-100'>Social</p>
                    <a href={instagram} target='_blank' rel='noopener noreferrer' className='f-20 gerstner fw-300 link op-link'>Instagram</a>
                    <a href={linkedin} target='_blank' rel='noopener noreferrer' className='f-20 gerstner fw-300 link op-link'>Linkedin</a>
                </div>
                <div className='flex gap-40 mb-20 fade--in' data-sal>
                    <p className='f-20 gerstner f-500 min-100'>Address</p>
                    <p className='f-20 gerstner fw-300 max-280 balance'>{address}</p>
                </div>
                <Spacer />
                {image?.gatsbyImageData && (
                    <div className='ratio-4-3 pos-rel overflow mt20 fade--in' data-sal>
                        <GatsbyImage image={image.gatsbyImageData} alt='' className='bg-image' />
                    </div>
                )}
            </div>
        </div>
    )
}

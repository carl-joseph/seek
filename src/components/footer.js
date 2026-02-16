import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Arrow } from "./sectionHeader"
import Spacer from "./spacer"

export default function Footer({ whiteBg = false, showCta = false }) {
    const { cta, info } = useStaticQuery(graphql`
        query FooterQuery {
            cta: datoCmsCta {
                title
                content
                email
                link {
                    link
                    title
                }
            }
            info: datoCmsInformation {
                email
                phone
                instagram
                linkedin
            }
        }
    `)
    const year = new Date().getFullYear()

    return (
        <footer className={`flex pos-rel z-2 flex-col gerstner ${whiteBg ? "bg-light text-black" : "bg-black"}`}>
            {showCta ? (
                <FooterCta cta={cta} />
            ) : (
                <div className='p10'>
                    <div className='flex gap-20 text-lg p10 py20'>
                        <div className='max-180 w-100 m-hide'></div>
                        {( cta.link ? <Link to={cta.link.link} className='link btn-arrow max-300 w-100 m-wa justify-end shrink-0'>{cta.link.title} <Arrow /></Link>:'')}
                    </div>
                    <h1 className='h1 balance mb-40'>{cta?.content}</h1>
                    <Spacer />
                    <Spacer />
                </div>
            )}
            <div className='p10 mta grid-2 gap-10 fade--in m-hide' data-sal>
                <div className='flex align-center gap-20'>
                    <p className='max-120 w-100'>© Seek, {year}</p>
                    <div className='ml60 flex gap-30'>
                        <Link to='/projects' className='op-link'>Projects</Link>
                        <Link to='/journal' className='op-link'>Journal</Link>
                        <Link to='/information' className='op-link'>Information</Link>
                    </div>
                </div>
                <div className='flex gap-60 m-hide align-center'>
                    {info?.email && (<a className='op-link' href={`mailto:${info.email}`}>{info.email}</a>)}
                    <div className='flex gap-30'>
                        {info?.instagram && (<a className='op-link' href={info.instagram} target='_blank' rel='noopener noreferrer'>Instagram</a>)}
                        {info?.linkedin && (<a className='op-link' href={info.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>)}
                    </div>
                    <div className='flex gap-20 align-center mla'>
                        <div className='flex align-center gap-40'>
                            <span className='mr20'>Part of</span>
                            <span className='f-500'>Clarity</span>
                        </div>
                        <div className='clarity-logo' />
                    </div>
                </div>
            </div>
            <FooterMobile year={year} info={info} />
        </footer>
    )
}

const FooterCta = ({cta}) => {
    return (
        <>
            <Spacer />
            <Spacer />
            <div className='flex pos-rel overflow align-center justify-center'>
                <div className='text-center flex flex-col gap-10'>
                    <h1 className='h0 large fade--in' data-sal>
                        {cta?.title || "Contact Us"}
                    </h1>
                    {cta?.email && (
                        <div className='fade--in flex' data-sal>
                            <a target='_blank' rel='noreferrer' className='ul-link text-lg op-50 op-link inverse ma' href={`mailto:${cta.email}`}>{cta.email}</a>
                        </div>
                    )}
                </div>
            </div>
            <Spacer />
            <Spacer />
        </>
    )
}

function FooterMobile({ year, info }) {
    return (
        <div className='footer-mobile p10 mta fade--in m-show flex-col gap-0' data-sal>
            <div className='footer-mobile-grid grid-2 m-grid-2 gap-0'>
                <div className='flex flex-col gap-0'>
                    <Link className='op-link' to='/projects'>Projects</Link>
                    <Link className='op-link' to='/journal'>Journal</Link>
                    <Link className='op-link' to='/information'>Information</Link>
                </div>
                <div className='flex flex-col gap-0'>
                    {info?.email && (<a className='op-link' href={`mailto:${info.email}`}>{info.email}</a>)}
                    <div className='flex gap-20'>
                        {info?.instagram && ( <a className='op-link' href={info.instagram} target='_blank' rel='noopener noreferrer'>Instagram</a>)}
                        {info?.linkedin && ( <a className='op-link' href={info.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>)}
                    </div>
                </div>
            </div>
            <Spacer />
            <div className='footer-mobile-bottom'>
                <p className='footer-mobile--copy max-120 w-100'>© Seek, {year}</p>
                <div className='flex gap-10 align-center footer-mobile-clarity'>
                    <span className='op-50'>Part of</span>
                    <span className='f-500'>Clarity</span>
                    <div className='clarity-logo' />
                </div>
            </div>
        </div>
    )
}

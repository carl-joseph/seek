import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { MobileNav } from "./mobileNav"

export default function Header({ title, isPreloading }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasIntroduced, setHasIntroduced] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        if (!isPreloading && !hasIntroduced) setHasIntroduced(true)
    }, [isPreloading, hasIntroduced])

    useEffect(() => 
        isPreloading && setIsMenuOpen(false)
    , [isPreloading])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const showIntro = !isPreloading && !hasIntroduced

    return (
        <header className={`masthead flex mt10 gap-10 ${isPreloading ? "masthead--preloading" : ""} ${isMenuOpen ? "masthead--menu-open" : ""}`}>
            <div className={`masthead-left m-100 flex w-50 p10 text-lg gap-20 ${isPreloading ? 'm-gap-0' : ''}`}>
                <Link className={`masthead-seek link max-120 w-100 ${isPreloading ? "preloader-seek" : ""}`} to='/'>Seek</Link>
                <div className={`masthead-desktop-links ml60 flex gap-30 ${isPreloading ? 'm-ml0' : 'm-hide'}`}>
                    {isPreloading ? <div className='office-text'>Office of Design</div> : <NavLinks intro={showIntro} />}
                </div>
            </div>
            {title && (
                <div className='masthead-title w-50 p10 pl0 pt20 m-hide'>
                    <p className='text-lg'>{title}</p>
                </div>
            )}
            {!isPreloading && (
                <MobileNav isOpen={isMenuOpen} onOpen={() => setIsMenuOpen(true)} onClose={() => setIsMenuOpen(false)} />
            )}
        </header>
    )
}

function NavLinks({ intro, className = "", onNavigate = null }) {
    return (
        <div className={`nav-links flex gap-30 ${intro ? "nav-links--intro" : ""} ${className}`}>
            <Link className='op-link' to='/projects' onClick={onNavigate}>Projects</Link>
            <Link className='op-link' to='/journal' onClick={onNavigate}>Journal</Link>
            <Link className='op-link' to='/information' onClick={onNavigate}>Information</Link>
        </div>
    )
}

export { NavLinks }

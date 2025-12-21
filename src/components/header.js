import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useLocation } from "@reach/router"
import { CloseIcon } from "./closeIcon"

gsap.registerPlugin(useGSAP)

export default function Header({ title, isPreloading }) {
    const prevIsPreloading = useRef(isPreloading)
    const seekRef = useRef(null)
    const menuRef = useRef(null)
    const mobileNavRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const prevIsMenuOpen = useRef(false)
    const { pathname } = useLocation()

    useEffect(() => {
        prevIsPreloading.current = isPreloading
    }, [isPreloading])

    useEffect(() => {
        if (isPreloading) setIsMenuOpen(false)
    }, [isPreloading])

    useEffect(() => {
        if (seekRef.current) seekRef.current.style.opacity = ""
        if (menuRef.current) menuRef.current.style.opacity = ""
        if (mobileNavRef.current) {
            mobileNavRef.current.style.opacity = ""
            mobileNavRef.current.style.transform = ""
        }
        setIsMenuOpen(false)
        prevIsMenuOpen.current = false
    }, [pathname])

    const shouldIntroNav = prevIsPreloading.current && !isPreloading

    useGSAP(
        () => {
            if (!seekRef.current || !menuRef.current || !mobileNavRef.current) return

            const wasMenuOpen = prevIsMenuOpen.current
            prevIsMenuOpen.current = isMenuOpen
            if (!wasMenuOpen && !isMenuOpen) return

            const tl = gsap.timeline()

            if (isMenuOpen) {
                tl.to([seekRef.current, menuRef.current], { opacity: 0, duration: 0.25 }).to(mobileNavRef.current, { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" })
                return () => tl.kill()
            }

            tl.to(mobileNavRef.current, { opacity: 0, x: 20, duration: 0.35, ease: "power2.inOut" }).to([seekRef.current, menuRef.current], { opacity: 1, duration: 0.25 })

            return () => tl.kill()
        },
        { dependencies: [isMenuOpen], scope: mobileNavRef }
    )

    return (
        <header className={`masthead flex mt10 gap-10 ${isPreloading ? "masthead--preloading" : ""} ${isMenuOpen ? "masthead--menu-open" : ""}`}>
            <div className='masthead-left flex w-50 p10 text-lg gap-20'>
                <Link className={`masthead-seek link max-120 w-100 ${isPreloading ? "preloader-seek" : ""}`} to='/' ref={seekRef}>
                    Seek
                </Link>
                <div className='masthead-desktop-links ml60 flex gap-30'>{isPreloading ? <div className='office-text'>Office of Design</div> : <NavLinks intro={shouldIntroNav} />}</div>
            </div>
            {title && (
                <div className='masthead-title w-50 p10 pl0 pt20'>
                    <p className='text-lg'>{title}</p>
                </div>
            )}
            {!isPreloading && (
                <>
                    <button className='masthead-menu-trigger text-lg' onClick={() => setIsMenuOpen(true)} type='button' ref={menuRef} aria-expanded={isMenuOpen} aria-controls='mobile-nav'>
                        Menu
                    </button>
                    <div className={`masthead-mobile-nav text-lg ${isMenuOpen ? "active" : ""}`} ref={mobileNavRef} id='mobile-nav'>
                        <NavLinks intro={false} className='masthead-mobile-links' onNavigate={() => setIsMenuOpen(false)} />
                        <button className='masthead-mobile-close' onClick={() => setIsMenuOpen(false)} type='button' aria-label='Close menu'>
                            <CloseIcon />
                        </button>
                    </div>
                </>
            )}
        </header>
    )
}

function NavLinks({ intro, className = "", onNavigate = null }) {
    const navRef = useRef(null)
    const [isIntro, setIsIntro] = useState(intro)

    useGSAP(
        () => {
            if (!isIntro) return
            gsap.to(navRef.current, { opacity: 1, duration: 0.55, onComplete: () => setIsIntro(false) })
        },
        { scope: navRef, dependencies: [isIntro] }
    )

    return (
        <div className={`nav-links flex gap-30 ${isIntro ? "nav-links--intro" : ""} ${className}`} ref={navRef}>
            <Link className='op-link' to='/projects' onClick={onNavigate}>
                Projects
            </Link>
            <Link className='op-link' to='/journal' onClick={onNavigate}>
                Journal
            </Link>
            <Link className='op-link' to='/information' onClick={onNavigate}>
                Information
            </Link>
        </div>
    )
}

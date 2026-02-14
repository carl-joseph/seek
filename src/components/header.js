import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { MobileNav } from "./mobileNav"

export default function Header({ isPreloading }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasIntroduced, setHasIntroduced] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isPreloading && !hasIntroduced) setHasIntroduced(true)
  }, [isPreloading, hasIntroduced])

  useEffect(() => {
    if (isPreloading) setIsMenuOpen(false)
  }, [isPreloading])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const showIntro = !isPreloading && !hasIntroduced

  return (
    <header className={`masthead flex align-center mt10 gap-10 ${isPreloading ? "masthead--preloading" : ""} ${isMenuOpen ? "masthead--menu-open" : ""}`}>
      <div className='masthead-left flex p10 text-lg gap-30 m-hide'>
        {isPreloading ? null : <NavLinks intro={showIntro} />}
      </div>

      <div className='masthead-center'>
        <Link to='/' className={`link ${isPreloading ? "preloader-seek" : ""}`}>
          <SeekLogo />
        </Link>
      </div>

      <div className={`masthead-right p10 text-lg ${isPreloading ? "office-text" : ""}`}>
        Office of Design
      </div>

      {!isPreloading && (
        <MobileNav
          isOpen={isMenuOpen}
          onOpen={() => setIsMenuOpen(true)}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

function SeekLogo() {
  return (
    <svg width='26' height='25' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M26 18.3062L17.8697 17.6648L18.5856 10.4583L17.2646 11.5765L13.8574 7.77766L15.8226 5.99232L19.3901 9.96947L20.8014 8.68663L17.2339 4.70947L19.0066 3.09906L22.7172 7.23571L24.1285 5.95287L18.7884 0L11.7983 6.34733C11.7711 6.30788 11.7438 6.26844 11.7131 6.22899C10.3717 4.44707 8.24623 5.37662 7.24741 5.84997L5.27363 6.7778C4.764 7.01276 4.01062 7.35577 3.54189 6.73492C3.03737 6.06435 3.4703 5.19483 4.40435 4.48309C5.35033 3.76278 6.39177 3.77478 7.23889 4.64602L8.78143 2.81608C7.64114 1.78363 5.79009 1.02387 3.25554 2.95671C1.4488 4.33388 0.407366 6.5497 1.63799 8.18584C3.0902 10.1135 4.7265 9.34692 6.29632 8.59059L7.8542 7.84455C8.7712 7.41408 9.40868 7.27344 9.88763 7.90801C10.3189 8.48083 10.0717 9.5733 9.01665 10.3776C7.8167 11.2935 6.55369 11.3141 5.62475 10.0827L4.01744 11.9795C6.05258 13.6928 8.15078 13.4373 10.1024 11.9486C11.3569 10.9916 12.0625 9.91802 12.2875 8.88557L16.2249 13.2743L16.2402 13.2606L15.8021 18.4726L13.0307 15.1574L11.1728 16.7301H11.1694V16.7336L9.11892 22.0176L6.65255 21.0486L8.58883 16.0578L6.81788 15.3615L4.8816 20.3523L2.65727 19.4776L4.67025 14.2862L2.8993 13.5899L0 21.0623L10.0052 24.9931L12.5637 18.3988L18.081 25L19.944 23.4239L16.8299 19.6988L23.612 20.3214L25.9983 18.3011L26 18.3062Z' fill='white'/>
    </svg>
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

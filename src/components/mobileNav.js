import React from "react"
import { NavLinks } from "./header"
import { CloseIcon } from "./closeIcon"

export const MobileNav = ({ isOpen, onOpen, onClose }) => {
    return (
        <>
            <button className='masthead-menu-trigger m-block text-lg' onClick={onOpen} type='button' aria-expanded={isOpen} aria-controls='mobile-nav'>
                Menu
            </button>
            <div className={`masthead-mobile-nav m-show m-flex text-lg ${isOpen ? "active" : ""}`} id='mobile-nav'>
                <NavLinks className='masthead-mobile-links m-gap-20' onNavigate={onClose} />
                <button className='masthead-mobile-close' onClick={onClose} type='button' aria-label='Close menu'>
                    <CloseIcon />
                </button>
            </div>
        </>
    )
}

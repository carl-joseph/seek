import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header className='masthead'>
            <div className='flex p20 text-lg gap-20'>
                <Link className='link' to='/'>
                    Seek
                </Link>
                <div className='ml60 flex gap-20'>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/journal'>Journal</Link>
                    <Link to='/information'>Information</Link>
                </div>
            </div>
        </header>
    )
}

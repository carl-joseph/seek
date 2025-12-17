import React from "react"
import { Link } from "gatsby"

export default function Header({ title }) {
    return (
        <header className='masthead flex mt10 gap-10'>
            <div className='flex w-50 p10 text-lg gap-20'>
                <Link className='link' to='/'>Seek</Link>
                <div className='ml60 flex gap-20'>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/journal'>Journal</Link>
                    <Link to='/information'>Information</Link>
                </div>
            </div>
            {title && (
                <div className='w-50 p10 pl0 pt20'>
                    <p className='text-lg'>{title}</p>
                </div>
            )}
        </header>
    )
}

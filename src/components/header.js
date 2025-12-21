import React from "react"
import { Link } from "gatsby"

export default function Header({ title }) {
    return (
        <header className='masthead flex mt10 gap-10'>
            <div className='flex w-50 p10 text-lg gap-20'>
                <Link className='link max-120 w-100' to='/'>Seek</Link>
                <div className='ml60 flex gap-30'>
                    <Link className='op-link' to='/projects'>Projects</Link>
                    <Link className='op-link' to='/journal'>Journal</Link>
                    <Link className='op-link' to='/information'>Information</Link>
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

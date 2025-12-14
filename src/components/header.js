import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  return (
    <header className='masthead'>
      <div className='flex p20 f-18 f-500 gap-20'>
        <Link className='link' to='/'>Seek</Link>
        <div className='ml60 flex gap-20'>
          <Link to='/projects'>Projects</Link>
          <Link to='/journal'>Journal</Link>
          <Link to='/information'>Information</Link>
        </div>
      </div>
    </header>
  )
}

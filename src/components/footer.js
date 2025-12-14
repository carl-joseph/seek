import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className='h-100vh flex f-500'>
      <div className='p20 mta flex'>
        <p>© Seek, {new Date().getFullYear()}</p>
        <div className='ml60 flex gap-20'>
          <Link to='/projects'>Projects</Link>
          <Link to='/journal'>Journal</Link>
          <Link to='/information'>Information</Link>
        </div>
      </div>
    </footer>
  )
}

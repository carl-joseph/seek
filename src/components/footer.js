import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className='h-100vh flex bg-black pos-rel z-2 flex-col text-lg'>
      <div className='flex align-center justify-center h-100'>
        <h1 className='h1 fade--in' data-sal>Contact Us</h1>
      </div>
      <div className='p20 mta flex fade--in' data-sal>
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

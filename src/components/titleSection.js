import React from "react"

export default function TitleSection({ title }) {
    return (
        <div className='h-100vh flex align-center justify-center'>
            <h1 className='h1 text-center'>{title}</h1>
        </div>
    )
}

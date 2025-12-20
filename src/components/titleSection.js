import React from "react"

export default function TitleSection({ title }) {
    return (
        <div className='h-80vh flex align-center justify-center'>
            <h1 className='h0 large text-center fade--in' data-sal>{title}</h1>
        </div>
    )
}

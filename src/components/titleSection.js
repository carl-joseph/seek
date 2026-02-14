import React from "react"

export default function TitleSection({ title }) {
    return (
        <div className='h-30vh flex align-end p10'>
            <h1 className='h0 large fade--in' data-sal>{title}</h1>
        </div>
    )
}

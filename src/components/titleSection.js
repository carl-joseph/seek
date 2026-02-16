import React from "react"
import Spacer from "../components/spacer"

export default function TitleSection({ title }) {
    return (
        <div className='pb20 p10'>
            <Spacer />
            <Spacer className='m-hide' />
            <Spacer className='m-hide' />
            <h1 className='h0 fade--in' data-sal>{title}</h1>
        </div>
    )
}

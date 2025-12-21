import React from "react"
import Spacer from "./spacer"

export default function Credits({ credits, content }) {
    if (!credits?.length && !content) return null
    return (
        <>
            <div className='p10 grid-2 m-flex m-flex-col-reverse gap-10 m-gap-40 mt20'>
                <div className='gerstner f-15 '>
                    {(credits.length ? <p className='op-50'>Credits</p>:'')}
                    <div className='flex flex-col'>
                        {credits?.map((credit, i) => (
                            <div className='fw-300' key={i} dangerouslySetInnerHTML={{ __html: credit.content }} />
                        ))}
                    </div>
                </div>
                {content && <div className='flex flex-col f-20 gap-20' dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        </>
    )
}

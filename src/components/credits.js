import React from "react"
import Spacer from "./spacer"

export default function Credits({ credits, content }) {
    if (!credits?.length && !content) return null
    return (
        <>
            <div className='p10 grid-2 gap-10'>
                <div className='gerstner'>
                    <p className='op-50'>Credits</p>
                    <div className='flex flex-col'>
                        {credits?.map((credit, i) => (
                            <div key={i} dangerouslySetInnerHTML={{ __html: credit.content }} />
                        ))}
                    </div>
                </div>
                {content && <div className='flex flex-col gap-20' dangerouslySetInnerHTML={{ __html: content }} />}
            </div>
        </>
    )
}

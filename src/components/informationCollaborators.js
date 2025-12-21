import React from "react"

export const InformationCollaborators = ({ collaborators }) => {
    return (
        <div>
            <p className='f-20 gerstner f-500 bb-1 pb10 mb10 fade--in' data-sal>Collaborators</p>
            <div className='pt10 grid-2 m-grid-2 gap-0'>
                {collaborators.map((item, i) => (
                    <p key={i} className='f-20 gerstner fw-300 fade--in' data-sal>{item.title}</p>
                ))}
            </div>
        </div>
    )
}

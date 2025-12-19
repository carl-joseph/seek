import React from "react"

export const InformationTeam = ({ team }) => {
    return (
        <div>
            <p className='f-20 gerstner f-500 bb-1 pb10 mb10'>Team</p>
            <div className='pt10'>
                {team.map((member, i) => (
                    <div key={i} className='grid-2 m-grid-2 gap-10'>
                        <p className='f-20 gerstner fw-300 min-100'>{member.title}</p>
                        <p className='f-20 gerstner fw-300 op-50'>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

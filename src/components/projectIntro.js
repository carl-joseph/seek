import React from "react"

export default function ProjectIntro({ introduction, client, service, sector, year }) {
    return (
        <div className='h-80vh flex flex-col p10'>
            <h1 className='h1'>{introduction}</h1>
            <div className='max-350 mta grid-2 gap-0 gerstner op-50'>
                <p className='f-500'>Client</p>
                <p>{client}</p>
                <p className='f-500'>Service</p>
                <p>{service}</p>
                <p className='f-500'>Sector</p>
                <p>{sector?.title}</p>
                <p className='f-500'>Year</p>
                <p>{year}</p>
            </div>
        </div>
    )
}

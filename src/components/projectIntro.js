import React from "react"

export default function ProjectIntro({ introduction, client, service, sector, year }) {
    return (
        <div className='h-80vh flex flex-col p10'>
            <h1 className='h1'>{introduction}</h1>
            <div className='max-350 mta grid-2 m-grid-2 gap-0 gerstner op-50'>
                <p className='f-500'>Client</p>
                <p className="fw-300">{client}</p>
                <p className='f-500'>Service</p>
                <p className="fw-300">{service}</p>
                <p className='f-500'>Sector</p>
                <p className="fw-300">
                    {Array.isArray(sector) 
                        ? sector.map((item, i) => (
                            <span key={item.title}>
                                {item.title}
                                {i < sector.length - 1 && ", "}
                            </span>
                        ))
                        : sector?.title
                    }
                </p>
                <p className='f-500'>Year</p>
                <p className="fw-300">{year}</p>
            </div>
        </div>
    )
}

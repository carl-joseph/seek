import React from "react"

export const InformationServices = ({ services }) => {
    return (
        <div>
            <p className='f-20 gerstner f-500 bb-1 pb10 mb10 fade--in' data-sal>Services</p>
            <div className='grid-2 m-grid-2 pt10 row-gap-40'>
                {services.map((service, i) => (
                    <div key={i} className='fade--in' data-sal>
                        <p className='f-20 gerstner f-500'>{service.title}</p>
                        {service.list.map((item, j) => (
                            <p key={j} className='f-20 gerstner fw-300 op-50 fade--in' data-sal>{item.title}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

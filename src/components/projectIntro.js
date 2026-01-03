import React from "react"

export default function ProjectIntro({ introduction, client, service, sector, year }) {
  const rows = [
    ["Client", client],
    ["Service", service],
    ["Sector", <Categories sector={sector} />],
    ["Year", year],
  ]
  return (
    <div className='h-80vh flex flex-col p10'>
      <h1 className='h1'>{introduction}</h1>
      <div className='max-350 mta flex flex-col gerstner op-50'>
        {rows.map(([label, value]) => (
          <div key={label} className='flex gap-20'>
            <p className='f-500 w-100 max-120'>{label}</p>
            <p className='fw-300 ml60'>{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Categories = ({ sector }) => {
  if (!sector) return null
  if (Array.isArray(sector)) return sector.map(s => s?.title).filter(Boolean).join(", ")
  return sector?.title || null
}

import React from 'react'

export default function CityBar({locations,displayCity}) {
  return (
    <div className='cityBar'>
     {locations.map((location,index) => {
      if (location.livCostData.error) return;
      return <button key={index} onClick={(e)=>displayCity(location.city)}>{location.city}</button>
     })}
    </div>
  )
}
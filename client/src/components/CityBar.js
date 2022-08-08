import React from 'react'

export default function CityBar({ allCityData, displaySearchedCity }) {
  return (
    <div className='cityBar'>
      {allCityData?.map((cityData, index) => {
        if (cityData.livCostData.error) return;
        return <button key={index} onClick={(e) => displaySearchedCity(cityData.city)}>{cityData.city}</button>
      })}
    </div>
  )
}

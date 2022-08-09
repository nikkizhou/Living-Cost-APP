import React from 'react'
import  { CityData } from '../components/interfaces.js'

interface Props {
  allCityData: CityData[],
  displaySearchedCity:Function
}

export default function CityBar({ allCityData, displaySearchedCity }:Props) {
  return (
    <div className='cityBar'>
      {allCityData?.map((cityData, index) => {
        if (cityData.livCostData.error) return;
        return <button key={index} onClick={(e) => displaySearchedCity(cityData.city)}>{cityData.city}</button>
      })}
    </div>
  )
}

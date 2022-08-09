import React from 'react'
import CityDisplayBlock from './CityDisplayBlock'
import { CityData } from './interfaces'

export interface CityDataProps {
  cityData1: CityData | undefined,
  cityData2: CityData | undefined,
  updateShowErrDialog: Function
}

function CityDisplayer({ cityData1, cityData2 }: CityDataProps) {
  console.log(cityData1);
  
  return (
    <div className='cityDisplay'>
      <CityDisplayBlock key={1} cityData={cityData1} />
      <CityDisplayBlock key={2} cityData={cityData2} />
    </div>
  )
}

export default CityDisplayer

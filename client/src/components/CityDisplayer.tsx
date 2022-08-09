import React from 'react'
import CityDisplayBlock from './CityDisplayBlock.tsx'
import { CityData } from './interfaces'

export interface CityDataProps {
  cityData1: CityData
  cityData2: CityData
}

function CityDisplayer({ cityData1, cityData2 }: CityDataProps) {
  return (
    <div className='cityDisplay'>
      <CityDisplayBlock key={1} cityData={cityData1} />
      <CityDisplayBlock key={2} cityData={cityData2} />
    </div>
  )
}

export default CityDisplayer

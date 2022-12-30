import React from 'react'
import { CityData } from './interfaces'

interface Props {
  cityData: CityData | undefined
}

export default function CityDisplayBlock({ cityData }: Props) {
  const prices = cityData?.livCostData?.prices
  const pricesDisplay = prices ? [prices[1], prices[36], prices[50], prices[10], prices[22]] : null

  return (
    <div className='cityDisplay-block'>
      <h2>{cityData?.city}</h2>
      {pricesDisplay?.map((item,index) => {
        return(
          <div key={index} className='cityDisplay-detail'>
            <p>{item.item_name}:</p>
            <p className='price'>{item.usd.avg}$</p>
          </div>
        )
      })}
      <img src={cityData?.picUrl} alt={cityData?.city}></img>
    </div>
  )
}

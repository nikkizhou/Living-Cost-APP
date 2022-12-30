import React from 'react'
import { CityData } from './interfaces'


interface Props {
  cityData: CityData | undefined
}

function CityDispalyTitles({ cityData }: Props) {
  const prices = cityData?.livCostData?.prices
  const pricesDisplay = prices ? [prices[1], prices[36], prices[50], prices[10], prices[22]] : null

  return (
    <div className='cityDisplay-titles'>
      <h2>dd</h2>
      {pricesDisplay?.map((item, index) => <p key={index}>{item.item_name}:</p>)}
    </div>
  )

}

export default CityDispalyTitles

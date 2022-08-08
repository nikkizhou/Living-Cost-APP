import React from 'react'

export default function CityDisplayBlock({ cityData }) {
  const {  picUrl } = cityData
  
  const prices = cityData?.livCostData?.prices
  const pricesDisplay = prices ? [prices[1], prices[36], prices[50], prices[10], prices[22]] : ''
  
  
  return(  
    <div className ='cityDisplay-city'>
      <h2>{cityData.city}</h2>
      {pricesDisplay && pricesDisplay.map(item =>{
        return <>
          <p>{item.item_name}:</p>
          <p className='price'>{item.usd.avg}$</p>
        </>
      })}
      <img src={picUrl} alt={cityData.city}></img>
    </div>
  )
}

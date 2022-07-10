import React from 'react'
import City from './City.js'

function CityDisplayer({cityData1,cityData2}) { //{city:'Oslo' , country:'Norway' , livCostData:{...} }
  //console.log(cityData1,'cityData1 in CityDisplayer')
 
  const prices1 = cityData1 ? cityData1.livCostData.prices : ''; 
  const prices2 = cityData2 ? cityData2.livCostData.prices: '';
  const pricesDisplay1 = prices1 ? [prices1[1],prices1[36],prices1[50],prices1[10],prices1[22]]:''
  const pricesDisplay2 = prices2 ?[prices2[1],prices2[36],prices2[50],prices2[10],prices2[22]]:''
 
  const error1 = cityData1 ? cityData1.livCostData.error:''
  const error2 = cityData2 ? cityData2.livCostData.error:''
  const title1 = error1 ? error1:`City: ${cityData1.city||''}`
  const title2 = error2 ? error2:`City: ${cityData2.city||''}`

  return (
    <div className='cityDisplay'>
      <City title={title1} pricesDisplay={pricesDisplay1} picUrl = {cityData1.picUrl}/>
      <City title={title2} pricesDisplay={pricesDisplay2} picUrl = {cityData2.picUrl}/>
    </div>
  )
}

export default CityDisplayer
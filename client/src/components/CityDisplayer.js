import React from 'react'
import CityDisplayBlock from './CityDisplayBlock.js'

function CityDisplayer({ cityData1, cityData2 }) {
  //const [displayController, setDisplayController] = useState({});
  //{city:'Oslo' , country:'Norway' , livCostData:{...} }
  //console.log(cityData1,'cityData1 in CityDisplayer')

  return (
    <div className='cityDisplay'>
      <CityDisplayBlock key={1} cityData={cityData1}  />
      <CityDisplayBlock key={2} cityData={cityData2} />
    </div>
  )
}

export default CityDisplayer


// AllCityData = [{}, {}, {}]
// //displayController = { skipLastOne: false, displayInFirstBlock: true }
// displayController = { cityData1: AllCityData[index1], cityData2: AllCityData[index2] }
// If skipLastOne:
//    If displayInFirstBlock: cityData1 = AllCityData


// Else:
  
// <City cityData1></City>
// <City cityData2></City>

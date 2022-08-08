
import {useState,useEffect} from 'react'
import Form from './components/Form.js'
import CityBar from './components/CityBar.js'
import CityDisplayer from './components/CityDisplayer.js'
import clone from 'clone'

function App() {  
  const [allCityData, setAllCityData] = useState(JSON.parse(localStorage.getItem('cityData')) );
  const [showErrorBlock, setShowErrorBlock] = useState(false);
 //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]
  
  const updateShowErrorBlock = payload => setShowErrorBlock(payload)

  const addCityData = locationInput => {
    const citiDataStorage = allCityData ? JSON.stringify([...allCityData, locationInput]) : locationInput
    setAllCityData([...allCityData, locationInput]) 
    localStorage.setItem('cityData', citiDataStorage)
  }

  const cityDataPointer = i => allCityData?.length >= i && allCityData[allCityData.length - i]
  
  const [cityData1, setCityData1] = useState(()=>cityDataPointer(1))
  const [cityData2, setCityData2] = useState(()=>cityDataPointer(2))

  console.log(cityData1,'cityData1');
  console.log(cityData2,'cityData2');
  console.log(allCityData,'allCityData');
  console.log(cityDataPointer(1),'cityDataPointer(1)');

  const displaySearchedCity = (cityName) => {
    // if a city is searched before, move the object to the end of the allCityData array
    const newAllCityData = clone(allCityData);
    const index = newAllCityData.findIndex(d => d.city === cityName);
    newAllCityData.push(newAllCityData.splice(index, 1)[0]);
    setAllCityData(newAllCityData);
    setCityData1(cityData2)
    setCityData2(cityData1)
    
    return;
  }

  // const errorFilter = (index)=>{
  //   let cityData = allCityData.length>index ? allCityData[allCityData.length-(index+1)] : '';
  //   let n = index+1
  //   while(allCityData.length-n>=index && allCityData[allCityData.length-n].livCostData.error){
  //     n++
  //     cityData = allCityData[allCityData.length-n]
  //   }
  //   return cityData
  // }

  return (
    <div className="App">
      <Form addCityData={addCityData} allCityData={allCityData} displaySearchedCity={displaySearchedCity} updateShowErrorBlock={updateShowErrorBlock} />
      <CityBar allCityData={allCityData} displaySearchedCity={displaySearchedCity } />
      <CityDisplayer cityData1={cityData1} cityData2={cityData2}/>
    </div>
  );
}

export default App;

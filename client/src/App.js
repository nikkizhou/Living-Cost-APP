
import {useState,useEffect} from 'react'
import Form from './components/Form.js'
import CityBar from './components/CityBar.js'
import CityDisplayer from './components/CityDisplayer.js'
import clone from 'clone'

function App() {  
  const [allCityData, setAllCityData] = useState([]);
 //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]

  const addCityData = (locationInput) => {
    //if fail to fetch loactionInput data, show error component
    setAllCityData([...allCityData, locationInput]);
  
  };

  const displaySearchedCity = (cityName) => {
    const neAllCityData = clone(allCityData);
    const index = neAllCityData.findIndex(d => d.city === cityName);
    neAllCityData.push(neAllCityData.splice(index, 1)[0]);
    setAllCityData(neAllCityData);
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

  let cityData1 = errorFilter(0)
  let cityData2 = errorFilter(1)

  return (
    <div className="App">
      <Form addCityData={addCityData} allCityData={allCityData} displaySearchedCity={displaySearchedCity } />
      <CityBar allCityData={allCityData} displaySearchedCity={displaySearchedCity } />
      <CityDisplayer cityData1={cityData1} cityData2={cityData2}/>
    </div>
  );
}

export default App;

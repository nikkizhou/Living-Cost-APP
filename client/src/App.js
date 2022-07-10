
import {useState,useEffect} from 'react'
import Form from './components/Form.js'
import CityBar from './components/CityBar.js'
import CityDisplayer from './components/CityDisplayer.js'
import clone from 'clone'

function App() {  
  const [locations, setLocations] = useState([]);
 //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]

  const addLocation = (locationInput) => {
    setLocations([...locations, locationInput]);
  };

  const displayCity = (cityName)=>{
    const newLocations = clone(locations);
    const index = newLocations.findIndex(location => location.city === cityName);
    newLocations.push(newLocations.splice(index, 1)[0]);
    setLocations(newLocations);
  }

  const errorFilter = (index)=>{
    let cityData = locations.length>index ? locations[locations.length-(index+1)] : '';
    let n = index+1
    while(locations.length-n>=index && locations[locations.length-n].livCostData.error){
      n++
      cityData = locations[locations.length-n]
    }
    return cityData
  }

  let cityData1 = errorFilter(0)
  let cityData2 = errorFilter(1)

  return (
    <div className="App">
      <Form addLocation={addLocation} locations={locations}/>
      <CityBar locations={locations} displayCity={displayCity}/>
      <CityDisplayer cityData1={cityData1} cityData2={cityData2}/>
    </div>
  );
}

export default App;

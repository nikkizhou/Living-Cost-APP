import { useState, useEffect } from 'react'
import Form from './components/Form'
import CityBar from './components/CityBar'
import CityDisplayer from './components/CityDisplayer'
import clone from 'clone'
import useLocalStorage from './helpers/useLocalStorage'
import { CityData } from './components/interfaces'

function App() {

  const [allCityData, setAllCityData] = useLocalStorage<CityData[]>('cityData', []);
  //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]
  const cityDataPointer = (i: number) => {
    if (allCityData?.length >= i)
      return allCityData[allCityData.length - i]
  }

  //console.log(allCityData);
  
  const [cityData1, setCityData1] = useState<CityData | undefined>(cityDataPointer(2))
  const [cityData2, setCityData2] = useState<CityData| undefined>(cityDataPointer(1))
  const [renderFirstBlock, setRenderFirstBlock] = useState(false);
  const [showErrDialog, setShowErrDialog] = useState(false);

  const updateShowErrDialog = (payload: boolean) => setShowErrDialog(payload);

  const addCityData = (newData: CityData) => {
    newData && setAllCityData([...allCityData, newData]);
    setRenderFirstBlock(!renderFirstBlock) 
  }

  const displaySearchedCity = (cityName: string) => {
    // if a city is searched before, move the object to the end of the allCityData array
    const newAllCityData = clone(allCityData);
    const index = newAllCityData.findIndex((data: CityData) => data.city === cityName);
    newAllCityData.push(newAllCityData.splice(index, 1)[0]);
    setAllCityData(newAllCityData);
    setRenderFirstBlock(!renderFirstBlock)
  }

  useEffect(() => { renderFirstBlock ? setCityData1(cityDataPointer(1)) : setCityData2(cityDataPointer(1)) }, [JSON.stringify(allCityData)])

  return (
    <div className="App">
      <Form addCityData={addCityData}
        allCityData={allCityData}
        displaySearchedCity={displaySearchedCity}
        updateShowErrDialog={updateShowErrDialog}
        showErrDialog={showErrDialog}
      />
      <CityBar allCityData={allCityData} displaySearchedCity={displaySearchedCity} />
      <CityDisplayer cityData1={cityData1} cityData2={cityData2} updateShowErrDialog={updateShowErrDialog} />
    </div>
  );
}

export default App;

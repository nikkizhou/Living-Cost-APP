import { useState, useRef } from 'react'
import SearchBar from './SearchBar';
import { CityData } from './interfaces'
import AlertDialog from '../components/AlertDialog'
import {baseUrl} from '../config'

interface Props {
  addCityData: Function,
  allCityData: CityData[] | any[],
  displaySearchedCity: Function,
  updateShowErrDialog: Function,
  showErrDialog: boolean,
}

function Form({ addCityData, allCityData, displaySearchedCity, updateShowErrDialog, showErrDialog }: Props) {
  const cityValue = useRef<HTMLInputElement>(null);
  const countryValue = useRef<HTMLInputElement>(null);

  const fetchData = async (url: string) => fetch(url).then(res => res.json());

  const duplicateSearch = () => {
    let duplicateSearch = false
    allCityData?.map(cityData => {
      if (cityData?.city.toLowerCase() == cityValue.current?.value.toLowerCase()) {
        displaySearchedCity(cityData.city);
        duplicateSearch = true;
        return;
      }
    })
    return duplicateSearch;
  }

  const fetchAndAddData = async () => {
    const [city, country] = [cityValue?.current?.value, countryValue?.current?.value]
    
    const livCostApiUrl = `${baseUrl}/api/prices?city_name=${city}&country_name=${country}`
    const picApiUrl = `${baseUrl}/api/pictures?city=${city}`
    const livCostData = await fetchData(livCostApiUrl)
    let picUrlData = await fetchData(picApiUrl)
    
    const newData = {
      city: livCostData?.city_name,
      country: livCostData?.country_name,
      livCostData,
      picUrl: picUrlData
    }
    
    console.log(newData,'newData line 46 form');
    
    //if fetchLivCostData fails, show reminding block
    livCostData.error ? updateShowErrDialog(true) : addCityData(newData)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    !duplicateSearch() && await fetchAndAddData()
  }
  

  return (
    <>
      {showErrDialog && <AlertDialog cityname={ cityValue.current!.value} updateShowErrDialog={updateShowErrDialog } />}
      <div className="form">
        <h1 className="form__heading">Cost of Living Searcher</h1>
        <form className="form__search" onSubmit={(e) => handleSubmit(e)}>
          <SearchBar name='country' reference={countryValue} />
          <SearchBar name='city' reference={cityValue} />
          <button type='submit' className="search__add-btn" >Search</button>
        </form>
      </div>
    </>
  )
}

export default Form

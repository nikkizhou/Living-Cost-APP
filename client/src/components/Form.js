import {useState} from 'react'
import SearchBar from './SearchBar.js';
import clone from 'clone'
import axios from "axios";

function Form({addCityData,allCityData,displaySearchedCity}) {
  const [inputValue, setinputValue] = useState({city:'',country:''});
  const updateCity =(cityName)=> setinputValue({...inputValue, city:cityName})
  const updateCountry =(countryName)=>setinputValue({...inputValue, country:countryName})
  
  const fetchData = async (url) => fetch(url).then(res => res.json()).catch(err => console.log(err.message));
  
  const handleSubmit = async (e,allCityData) => {
    e.preventDefault();
    allCityData.map(cityData => cityData.city == inputValue.city && displaySearchedCity(cityData.name))
    //if fetchLivCostData fails, show reminding block
    const livCostApiUrl = `http://localhost:8080/api/prices?city_name=${inputValue.city}&country_name=${inputValue.country}`
    const picApiUrl = `http://localhost:8080/api/pictures?city=${inputValue.city}`
    const livCostData = await fetchData(livCostApiUrl)
    const picUrlData = await fetch(picApiUrl)
    addLocation({ ...inputValue, livCostData, picUrl: picUrlData })
    
    setinputValue({city:'',country:''});
  }

  return (
    <div className="form">
        <h1 className="form__heading">Cost of Living Searcher</h1>
        <form className="form__search" onSubmit={(e)=>handleSubmit(e,allCityData)}>
          <SearchBar labelName='Country'  value={inputValue.country} handleChange={updateCountry}/>
          <SearchBar labelName='City' value={inputValue.city} handleChange={updateCity}/>
          <button type='submit' className="search__add-btn" >Search</button>
        </form>
    </div>
  )
}

export default Form

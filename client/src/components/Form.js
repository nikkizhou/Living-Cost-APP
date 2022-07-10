import {useState} from 'react'
import SearchBar from './SearchBar.js';
import clone from 'clone'

function Form({addLocation,locations}) {
  const [inputValue, setinputValue] = useState({city:'',country:''});

  const updateCity =(cityName)=>{
    setinputValue({...inputValue, city:cityName})
  }

  const updateCountry =(countryName)=>{
    setinputValue({...inputValue, country:countryName})
  }

  const fetchLivCostData = async (inputValue) => {
    const url = `http://localhost:8080/api/prices?city_name=${inputValue.city}&country_name=${inputValue.country}`
    const response = await fetch(url,
      {
        method: "GET",
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        })
      }
    );
    return await response.json()
  };

  const fetchPicUrl = async (inputValue) => {
    const url = `http://localhost:8080/api/pictures?city=${inputValue.city}`
    const response = await fetch(url,
      {
        method: "GET",
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        })
      }
    );
    return await response.json()
  };


  

  const handleSubmit = (e,locations) => {
    e.preventDefault();
    const emptyInput = !inputValue.city||!inputValue.country
    //console.log(inputValue);
    if (emptyInput) {
      alert("Please enter CITY or COUNTRY name");
      return;
    }
    
    fetchLivCostData(inputValue)
      .then(data=>{
        let duplicatedCityName = false;
        locations.map(location=>{
          if (location.city == inputValue.city){
            duplicatedCityName = true;
          }
        })
        
        if(!duplicatedCityName && data) {
          fetchPicUrl(inputValue)
          .then(picUrldata=>{
            addLocation({...inputValue, livCostData: data, picUrl:picUrldata})
          })
        }
      })
      .catch(err =>console.log(err.message));

    

    
    setinputValue({city:'',country:''});
  }

  return (
    <div className="form">
        <h1 className="form__heading">Cost of Living Searcher</h1>
        <form className="form__search" onSubmit={(e)=>handleSubmit(e,locations)}>
          <SearchBar labelName='Country'  value={inputValue.country} handleChange={updateCountry}/>
          <SearchBar labelName='City' value={inputValue.city} handleChange={updateCity}/>
          <button type='submit' className="search__add-btn" >Search</button>
        </form>
    </div>
  )
}

export default Form
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SearchBar_js_1 = __importDefault(require("./SearchBar.js"));
function Form({ addCityData, allCityData, displaySearchedCity, updateShowErrDialog }) {
    const [inputValue, setinputValue] = (0, react_1.useState)({ city: '', country: '' });
    const updateCity = (cityName) => setinputValue(Object.assign(Object.assign({}, inputValue), { city: cityName }));
    const updateCountry = (countryName) => setinputValue(Object.assign(Object.assign({}, inputValue), { country: countryName }));
    const fetchData = (url) => __awaiter(this, void 0, void 0, function* () { return fetch(url).then(res => res.json()); });
    const duplicateSearch = () => {
        let duplicateSearch = false;
        //console.log(allCityData,'allCityData in duplicateSearch in Form');
        allCityData === null || allCityData === void 0 ? void 0 : allCityData.map(cityData => {
            if (cityData.city.toLowerCase() == inputValue.city.toLowerCase()) {
                displaySearchedCity(cityData.city);
                duplicateSearch = true;
                return;
            }
        });
        return duplicateSearch;
    };
    const fetchAndAddData = () => __awaiter(this, void 0, void 0, function* () {
        //if fetchLivCostData fails, show reminding block
        const livCostApiUrl = `http://localhost:8080/api/prices?city_name=${inputValue.city}&country_name=${inputValue.country}`;
        const picApiUrl = `http://localhost:8080/api/pictures?city=${inputValue.city}`;
        const livCostData = yield fetchData(livCostApiUrl);
        const picUrlData = yield fetchData(picApiUrl);
        const newData = Object.assign(Object.assign({}, inputValue), { livCostData, picUrl: picUrlData });
        livCostData.error ? updateShowErrDialog(true) : addCityData(newData);
        //livCostData ? addCityData : updateShowBlock
    });
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!duplicateSearch())
            fetchAndAddData();
        setinputValue({ city: '', country: '' });
    });
    return (<div className="form">
        <h1 className="form__heading">Cost of Living Searcher</h1>
        <form className="form__search" onSubmit={(e) => handleSubmit(e)}>
          <SearchBar_js_1.default labelName='Country' value={inputValue.country} handleChange={updateCountry}/>
          <SearchBar_js_1.default labelName='City' value={inputValue.city} handleChange={updateCity}/>
          <button type='submit' className="search__add-btn">Search</button>
        </form>
    </div>);
}
exports.default = Form;

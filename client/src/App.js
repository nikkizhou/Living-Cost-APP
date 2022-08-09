<<<<<<< Updated upstream

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
=======
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var Form_js_1 = require("./components/Form.js");
var CityBar_js_1 = require("./components/CityBar.js");
var CityDisplayer_tsx_1 = require("./components/CityDisplayer.tsx");
var clone_1 = require("clone");
var useLocalStorage_js_1 = require("./useLocalStorage.js");
function App() {
    var _a = (0, useLocalStorage_js_1["default"])('cityData', []), allCityData = _a[0], setAllCityData = _a[1];
    //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]
    var cityDataPointer = function (i) { return (allCityData === null || allCityData === void 0 ? void 0 : allCityData.length) >= i && allCityData[allCityData.length - i]; };
    var _b = (0, react_1.useState)(cityDataPointer(2)), cityData1 = _b[0], setCityData1 = _b[1];
    var _c = (0, react_1.useState)(cityDataPointer(1)), cityData2 = _c[0], setCityData2 = _c[1];
    var _d = (0, react_1.useState)(false), renderFirstBlock = _d[0], setRenderFirstBlock = _d[1];
    var _e = (0, react_1.useState)(false), showErrDialog = _e[0], setShowErrDialog = _e[1];
    //console.log(showErrDialog);
    var updateShowErrDialog = function (payload) { return setShowErrDialog(payload); };
    var addCityData = function (newData) {
        newData && setAllCityData(__spreadArray(__spreadArray([], allCityData, true), [newData], false));
        setRenderFirstBlock(!renderFirstBlock);
    };
    var displaySearchedCity = function (cityName) {
        // if a city is searched before, move the object to the end of the allCityData array
        var newAllCityData = (0, clone_1["default"])(allCityData);
        var index = newAllCityData.findIndex(function (d) { return d.city === cityName; });
        newAllCityData.push(newAllCityData.splice(index, 1)[0]);
        setAllCityData(newAllCityData);
        setRenderFirstBlock(!renderFirstBlock);
    };
    (0, react_1.useEffect)(function () { renderFirstBlock ? setCityData1(cityDataPointer(1)) : setCityData2(cityDataPointer(1)); }, [JSON.stringify(allCityData)]);
    return (<div className="App">
      <Form_js_1["default"] addCityData={addCityData} allCityData={allCityData} displaySearchedCity={displaySearchedCity} updateShowErrDialog={updateShowErrDialog}/>
      <CityBar_js_1["default"] allCityData={allCityData} displaySearchedCity={displaySearchedCity}/>
      <CityDisplayer_tsx_1["default"] cityData1={cityData1} cityData2={cityData2} updateShowErrDialog={updateShowErrDialog}/>
    </div>);
>>>>>>> Stashed changes
}
exports["default"] = App;

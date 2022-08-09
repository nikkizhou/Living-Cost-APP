"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Form_js_1 = __importDefault(require("./components/Form.js"));
const CityBar_js_1 = __importDefault(require("./components/CityBar.js"));
const CityDisplayer_js_1 = __importDefault(require("./components/CityDisplayer.js"));
const clone_1 = __importDefault(require("clone"));
const useLocalStorage_js_1 = __importDefault(require("./useLocalStorage.js"));
function App() {
    const [allCityData, setAllCityData] = (0, useLocalStorage_js_1.default)('cityData', []);
    //[{city: , country: , livCostData: ,picUrlData: ,}, {city: , country: , livCostData: }, {city: , country: , livCostData: }]
    const cityDataPointer = i => (allCityData === null || allCityData === void 0 ? void 0 : allCityData.length) >= i && allCityData[allCityData.length - i];
    const [cityData1, setCityData1] = (0, react_1.useState)(cityDataPointer(2));
    const [cityData2, setCityData2] = (0, react_1.useState)(cityDataPointer(1));
    const [renderFirstBlock, setRenderFirstBlock] = (0, react_1.useState)(false);
    const [showErrDialog, setShowErrDialog] = (0, react_1.useState)(false);
    //console.log(showErrDialog);
    const updateShowErrDialog = (payload) => setShowErrDialog(payload);
    const addCityData = (newData) => {
        newData && setAllCityData([...allCityData, newData]);
        setRenderFirstBlock(!renderFirstBlock);
    };
    const displaySearchedCity = (cityName) => {
        // if a city is searched before, move the object to the end of the allCityData array
        const newAllCityData = (0, clone_1.default)(allCityData);
        const index = newAllCityData.findIndex(d => d.city === cityName);
        newAllCityData.push(newAllCityData.splice(index, 1)[0]);
        setAllCityData(newAllCityData);
        setRenderFirstBlock(!renderFirstBlock);
    };
    (0, react_1.useEffect)(() => { renderFirstBlock ? setCityData1(cityDataPointer(1)) : setCityData2(cityDataPointer(1)); }, [JSON.stringify(allCityData)]);
    return (<div className="App">
      <Form_js_1.default addCityData={addCityData} allCityData={allCityData} displaySearchedCity={displaySearchedCity} updateShowErrDialog={updateShowErrDialog}/>
      <CityBar_js_1.default allCityData={allCityData} displaySearchedCity={displaySearchedCity}/>
      <CityDisplayer_js_1.default cityData1={cityData1} cityData2={cityData2} updateShowErrDialog={updateShowErrDialog}/>
    </div>);
}
exports.default = App;

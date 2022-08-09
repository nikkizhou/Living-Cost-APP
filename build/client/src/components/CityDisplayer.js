"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CityDisplayBlock_js_1 = __importDefault(require("./CityDisplayBlock.js"));
function CityDisplayer({ cityData1, cityData2 }) {
    //const [displayController, setDisplayController] = useState({});
    //{city:'Oslo' , country:'Norway' , livCostData:{...} }
    //console.log(cityData1,'cityData1 in CityDisplayer')
    return (<div className='cityDisplay'>
      <CityDisplayBlock_js_1.default key={1} cityData={cityData1}/>
      <CityDisplayBlock_js_1.default key={2} cityData={cityData2}/>
    </div>);
}
exports.default = CityDisplayer;
// AllCityData = [{}, {}, {}]
// //displayController = { skipLastOne: false, displayInFirstBlock: true }
// displayController = { cityData1: AllCityData[index1], cityData2: AllCityData[index2] }
// If skipLastOne:
//    If displayInFirstBlock: cityData1 = AllCityData
// Else:
// <City cityData1></City>
// <City cityData2></City>

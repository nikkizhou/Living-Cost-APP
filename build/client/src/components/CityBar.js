"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CityBar({ allCityData, displaySearchedCity }) {
    return (<div className='cityBar'>
      {allCityData === null || allCityData === void 0 ? void 0 : allCityData.map((cityData, index) => {
            if (cityData.livCostData.error)
                return;
            return <button key={index} onClick={(e) => displaySearchedCity(cityData.city)}>{cityData.city}</button>;
        })}
    </div>);
}
exports.default = CityBar;

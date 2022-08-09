"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CityDisplayBlock({ cityData }) {
    var _a;
    const { picUrl } = cityData;
    const prices = (_a = cityData === null || cityData === void 0 ? void 0 : cityData.livCostData) === null || _a === void 0 ? void 0 : _a.prices;
    const pricesDisplay = prices ? [prices[1], prices[36], prices[50], prices[10], prices[22]] : '';
    return (<div className='cityDisplay-city'>
      <h2>{cityData.city}</h2>
      {pricesDisplay && pricesDisplay.map(item => {
            return <>
          <p>{item.item_name}:</p>
          <p className='price'>{item.usd.avg}$</p>
        </>;
        })}
      <img src={picUrl} alt={cityData.city}></img>
    </div>);
}
exports.default = CityDisplayBlock;

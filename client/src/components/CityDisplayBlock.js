"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CityDisplayBlock(_a) {
    var _b;
    var cityData = _a.cityData;
    var picUrl = cityData.picUrl;
    var prices = (_b = cityData === null || cityData === void 0 ? void 0 : cityData.livCostData) === null || _b === void 0 ? void 0 : _b.prices;
    var pricesDisplay = prices ? [prices[1], prices[36], prices[50], prices[10], prices[22]] : '';
    return (<div className='cityDisplay-city'>
      <h2>{cityData.city}</h2>
      {pricesDisplay && pricesDisplay.map(function (item) {
            return <>
          <p>{item.item_name}:</p>
          <p className='price'>{item.usd.avg}$</p>
        </>;
        })}
      <img src={picUrl} alt={cityData.city}></img>
    </div>);
}
exports["default"] = CityDisplayBlock;

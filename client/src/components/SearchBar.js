"use strict";
exports.__esModule = true;
var react_1 = require("react");
function SearchBar(_a) {
    var labelName = _a.labelName, value = _a.value, handleChange = _a.handleChange;
    return (<div className='search__searchBar'>
      <label htmlFor={labelName}>{labelName}</label>
      <input type="text" name={labelName} placeholder={labelName} value={value} onChange={function (e) { return handleChange(e.target.value); }} required>
      </input>
    </div>);
}
exports["default"] = SearchBar;

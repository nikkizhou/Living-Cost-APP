"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SearchBar({ labelName, value, handleChange }) {
    return (<div className='search__searchBar'>
      <label htmlFor={labelName}>{labelName}</label>
      <input type="text" name={labelName} placeholder={labelName} value={value} onChange={e => handleChange(e.target.value)} required>
      </input>
    </div>);
}
exports.default = SearchBar;

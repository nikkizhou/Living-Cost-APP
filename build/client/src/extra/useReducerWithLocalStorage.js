"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useLocalStorage_js_1 = __importDefault(require("../useLocalStorage.js"));
function useReducerWithLocalStorage(reducer, defaultState) {
    const [allCityData, setAllCityData] = (0, useLocalStorage_js_1.default)('cityData', defaultState);
    return (0, react_1.useReducer)((state, action) => {
        const newState = reducer(state, action);
        setAllCityData(newState);
        console.log(newState, 'newState in useReducerWithLc');
        return newState;
    }, Object.assign({}, allCityData));
}
exports.default = useReducerWithLocalStorage;

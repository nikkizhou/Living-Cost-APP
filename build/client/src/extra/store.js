"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone_1 = __importDefault(require("clone"));
const reducer = (state, action) => {
    console.log(state, 'state in store');
    console.log(action, 'action in store');
    switch (action.type) {
        case 'addCityData': {
            return [...state, action.payload];
        }
        case 'moveOneToEnd': {
            const newAllCityData = (0, clone_1.default)(state);
            const index = newAllCityData.findIndex(d => d.city === action.payload);
            newAllCityData.push(newAllCityData.splice(index, 1)[0]);
            return newAllCityData;
        }
        default:
            return state;
    }
};
exports.reducer = reducer;

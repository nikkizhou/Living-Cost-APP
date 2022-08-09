"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalMutation = exports.useGlobalState = exports.ContainerProvider = exports.MutationContext = exports.StateContext = void 0;
const react_1 = __importStar(require("react"));
const store_js_js_1 = require("./stateMangement/store.js.js");
const useReducerWithLocalStorage_js_1 = __importDefault(require("./useReducerWithLocalStorage.js"));
exports.StateContext = (0, react_1.createContext)({});
exports.MutationContext = (0, react_1.createContext)({});
const ContainerProvider = ({ children }) => {
    const [state, dispatch] = (0, useReducerWithLocalStorage_js_1.default)(store_js_js_1.reducer, []);
    window.rootState = state;
    const methods = {
        addCityData(newData) {
            dispatch({ type: 'addCityData', payload: newData });
        },
        moveOneToEnd(cityName) {
            dispatch({ type: 'moveOneToEnd', payload: cityName });
        }
    };
    return (<exports.StateContext.Provider value={state}>
      <exports.MutationContext.Provider value={methods}>
        {children}
      </exports.MutationContext.Provider>
    </exports.StateContext.Provider>);
};
exports.ContainerProvider = ContainerProvider;
function useGlobalState() {
    return (0, react_1.useContext)(exports.StateContext);
}
exports.useGlobalState = useGlobalState;
function useGlobalMutation() {
    return (0, react_1.useContext)(exports.MutationContext);
}
exports.useGlobalMutation = useGlobalMutation;

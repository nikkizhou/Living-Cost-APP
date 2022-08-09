"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8080;
const API_KEY = process.env.API_KEY;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/prices', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.query.city_name;
    const country = req.query.country_name;
    const options = {
        method: 'GET',
        url: "https://cost-of-living-and-prices.p.rapidapi.com/prices",
        params: { city_name: city, country_name: country },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };
    res.status(200);
    try {
        const result = yield axios_1.default.request(options);
        res.json(result.data);
    }
    catch (err) {
        console.error(`failed calling api due to: ${err.message}`);
    }
}));
app.get('/api/pictures', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.query.city;
    let result;
    const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;
    try {
        result = yield axios_1.default.get(url);
        res.json(result.data.results[1].urls.small);
    }
    catch (err) {
        console.error(`failed city api due to ${err.message}`);
    }
}));
app.listen(PORT, (error) => {
    if (!error)
        console.log("App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});

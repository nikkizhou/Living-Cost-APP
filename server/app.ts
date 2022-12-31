import 'dotenv/config';
import express from 'express'
import axios from 'axios'
import cors from 'cors'


const app = express();
const PORT = 8080;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/prices', async (req, res)=>{
    const city = req.query.city_name;
    const country = req.query.country_name;

    const options:any =  {
        method: 'GET',
        url: "https://cost-of-living-and-prices.p.rapidapi.com/prices",
        params: {city_name: city, country_name: country},
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    };
    res.status(200);
    try {
        const result = await axios.request(options);
        res.json(result.data);
    } catch (err:any) {
        res.json({ error: `failed calling api due to: ${err.message}` });
    }
});

app.get('/api/pictures', async (req, res)=>{
    const city = req.query.city;
    let result;
    const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`
    try {
        result = await axios.get(url);
        res.json(result.data.results[1].urls.small);

    } catch (err:any) {
        res.json({ error: `failed city api due to ${err.message}` });
    }
});


app.listen(PORT, () =>{
    console.log("App is listening on port "+ PORT)
});

import { model, Schema, Model, Document } from 'mongoose';

interface IPriceItem extends Document { 
  categoryName: string;
  itemName: string;
  priceUSD: number;
}

interface ICity extends Document {
  cityName: string;
  countryName: string;
  exchangeRate: {
    [key: string]: number
  };
  prices: IPriceItem[];
  picUrl?: string
}

const PriceItemSchema: Schema = new Schema({
  categoryName: { type: String },
  itemName: { type: String },
  priceUSD: { type: String }
});

const CitySchema: Schema = new Schema({
  cityName: { type: String, required: true },
  countryName: { type: String, required: true },
  exchangeRate: { type: Object},
  prices: [{ type: PriceItemSchema}],
  pricUrl: { type: String },
});

const City =  model('City', CitySchema);

export default City;

import City from './models/cities'
import mongoose from 'mongoose';

async function run() {
  await mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("MongoDB connected");
  const db = mongoose.connection;
  // 4. Connect to MongoDB


  const city = new City({
    cityName: '',
    countryName: '',
    exchangeRate: '',
    prices: '',
    pricUrl: '',
  });

  await city.save();
  console.log(city.cityName); // 'bill@initech.com'
}

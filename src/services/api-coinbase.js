// import axios from 'axios';
import { coinbase } from './apiBaseURL';

// const url = 'https://api.pro.coinbase.com';

// get all products from coinbase
export const getProducts = async () => {
  const response = await coinbase.get('/products');
  console.log('Axios getProducts here -----------');
  console.log(response.data);
  return response.data;
};

// get historical data
export const getHistoricalData = async (pair) => {
  const response = await coinbase.get(
    `/products/${pair}/candles?granularity=86400`
  );
  console.log('Axios historicalData here -----------');
  // console.log(response.data)
  return response.data;
};

import axios from 'axios';

const coinGecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
});

const coinbase = axios.create({
  baseURL: 'https://api.pro.coinbase.com'
});

export { coinGecko, coinbase };

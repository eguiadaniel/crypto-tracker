import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';
import Currency from './components/Currency';
import { getProducts, getHistoricalData } from './services/api-coinbase';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  let coinbaseApiUrl = `https://api.pro.coinbase.com/products`;
  let apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  // Data from Coinbase
  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setCurrencies(products);
      console.log(products);
    }

    fetchProducts();
  }, []);

  // Data from CoinGecko
  useEffect(() => {
    let data = {};
    async function fetchData() {
      const response = await axios.get(apiUrl);
      data = response.data;
      setCoins(data);
      console.log(data);
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase())
    // console.log(filteredCoins);
  );

  const filteredCurrencies = currencies.filter((currency) =>
    currency.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">Search for a currency</div>
        <form>
          <input
            type="text"
            placeholder="search here"
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.market_cap}
          />
        );
      })}
      {filteredCurrencies.map((currency) => {
        return (
          <Currency
            key={currency.id}
            name={currency.display_name}
            // image={currency.image}
            // symbol={currency.symbol}
            price={currency.min_market_funds}
            volume={currency.max_market_funds}
          />
        );
      })}
    </div>
  );
}

export default App;

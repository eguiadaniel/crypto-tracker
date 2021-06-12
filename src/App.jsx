import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);

  let apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false';

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

  return (
    <div className="coin-app">
      <div className="coin-search"></div>
      <div className="coin-text">Search for a currency</div>
      <form action=""></form>
    </div>
  );
}

export default App;

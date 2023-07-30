import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Top() {
  const [cryptoArr, setCryptoArr] = useState([]);

  useEffect(() => {
    fetchTopCryptoData();
  }, []);

  const fetchTopCryptoData = async () => {
    try {
      const response = await axios.get('https://api.coinlore.net/api/tickers/');
      const topTenCrypto = response.data.data.slice(0, 10);
      setCryptoArr(topTenCrypto);
    } catch (error) {
      console.error('Error fetching top crypto data:', error);
    }
  };

  return (
    <div className='top-container'>
      <h1>Top 10 Global Crypto Coins</h1>
      <div className='display-container'>
        {cryptoArr.map((crypto) => (
          <div className='coin-container' key={crypto.id}>
            <p className='rank-para'>Rank #{crypto.rank}</p>
            <h3 className='coin-symbol'>{crypto.name} ({crypto.symbol})</h3>
            <p className='price-para'>Price: {crypto.price_usd}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;

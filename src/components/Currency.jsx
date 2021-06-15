import React from 'react';

const Currency = ({ name, price, volume }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          {/* <img src={image} alt={name} /> */}
          <h1>{name}</h1>
          {/* <p className='coin-symbol'>{symbol}</p>
          <p className='coin-data'>{symbol}</p> */}
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Currency;

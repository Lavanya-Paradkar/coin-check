import Axios from 'axios';
import React, { useState } from 'react';
import './Calculator.css';

const currencyData = [
  "USD", 
  "AUD", 
  "BRL", 
  "CAD",
  "CHF",
  "CLP",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "NZD",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "TWD"
]

const Calculator = () => {

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(0);
  
  const getValue = () => {
    Axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=${amount}`).then(
      data => {
        setResult(data.data)
      }
    )
  };

  //console.log(result);

  return (
    <div className='calculator'>
      <div className='calculator__container'>
          <input type="number" placeholder='Amount' value={amount} min={1} onChange={(e) => setAmount(e.target.value)}/>
          <select value={currency} placeholder='Currency' onChange={(e) => setCurrency(e.target.value)}>
            {currencyData.map(index => (
              <option>
                {index}
              </option>
            ))}
          </select>
          
      </div>
      <div className='calc__button' onClick={getValue}>
            Go
      </div>
      <div className='calculator__result'>
        {result === 0 ? 'No Value Added' : `${result} BTC`}
      </div>
    </div>
  )
}

export default Calculator
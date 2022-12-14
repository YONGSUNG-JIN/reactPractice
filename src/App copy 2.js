import { useState, useEffect } from 'react';
import styles from './App.module.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => { 
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res)=>res.json())
      .then((result)=> {
        setCoins(result);
        setLoading(false)
      })
  }, [])
  console.log(coins)
  return (<div>
    <h1>The Coins ({coins.length})</h1>
      {loading ? 
      <strong>Loading...</strong> 
      : <select>
          {coins.map(e => <option>{e.name}({e.symbol}) : {e.quotes.USD.price}</option>)}
        </select>
    }

  </div>)
}

export default App;

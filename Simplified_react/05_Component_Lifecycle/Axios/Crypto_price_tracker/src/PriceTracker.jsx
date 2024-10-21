import axios from "axios"
import { useEffect, useState } from "react"

export function PriceTracker() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    //Fetching data using axios

    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then((res) => {
        setData(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Loading....</h2>
  }

  if (error) {
    return <h2>Error encountered:{error}</h2>
  }

  return (
    <div>
      <h1>Crypto Information</h1> <br />
      {/* {JSON.stringify(data)} */}
      {data.map((data) => {
        return (
          <div className="box" key={data.id}>
            <strong>Currency: {data.name}</strong> <br />
            Rank : {data.rank} <br />
            Symbol : {data.symbol} <br />
            Price : {parseFloat(data.price_usd).toLocaleString()} <br />
            Percent Change in 24h :{" "}
            {parseFloat(data.percent_change_24h).toLocaleString()} <br />
            Market Cap : {parseFloat(data.market_cap_usd).toLocaleString()}{" "}
            <br />
            24-hour Trading Volume :{" "}
            {parseFloat(data.volume24).toLocaleString()} <br />
          </div>
        )
      })}
    </div>
  )
}

// {
//     "id": "90",
//     "symbol": "BTC",
//     "name": "Bitcoin",
//     "nameid": "bitcoin",
//     "rank": 1,
//     "price_usd": "67551.57",
//     "percent_change_24h": "-1.60",
//     "percent_change_1h": "-0.81",
//     "percent_change_7d": "7.96",
//     "price_btc": "1.00",
//     "market_cap_usd": "1334875310188.00",
//     "volume24": 29718034034.4505,
//     "volume24a": 16910757625.1083,
//     "csupply": "19760834.00",
//     "tsupply": "19760834",
//     "msupply": "21000000"
//   },

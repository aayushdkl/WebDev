import axios from "axios"
import { useEffect, useState } from "react"

export function PriceTracker2() {
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
    return <h2 className="text-center mt-5">Loading....</h2>
  }

  if (error) {
    return (
      <h2 className="text-center text-danger mt-5">
        Error encountered: {error}
      </h2>
    )
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Crypto Information</h1>
      <div className="row">
        {data.map((crypto) => (
          <div className="col-md-4 mb-4" key={crypto.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {crypto.name} <small>({crypto.symbol})</small>
                </h5>
                <p className="card-text">
                  <strong>Rank:</strong> {crypto.rank} <br />
                  <strong>Price (USD):</strong>{" "}
                  {parseFloat(crypto.price_usd).toLocaleString()} <br />
                  <strong>Percent Change (24h):</strong>{" "}
                  <span
                    className={
                      parseFloat(crypto.percent_change_24h) > 0
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {parseFloat(crypto.percent_change_24h).toLocaleString()}%
                  </span>
                  <br />
                  <strong>Market Cap:</strong>{" "}
                  {parseFloat(crypto.market_cap_usd).toLocaleString()} <br />
                  <strong>24-hour Volume:</strong>{" "}
                  {parseFloat(crypto.volume24).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

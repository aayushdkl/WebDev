import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export function useFetch(url) {
  const [finalData, setFinalData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getDetails() {
    axios
      .get(url)
      .then((response) => {
        setFinalData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDetails()
  }, [url])

  return { finalData, loading, error }
}

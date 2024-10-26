// import { response } from "express"
import { useEffect, useState } from "react"
import axios from "axios"

export function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setData(response.data)
        setisLoading(false)
      })
      .catch((err) => {
        setisError(err.message)
        setisLoading(false)
      })
  }, [url])

  return { data, isLoading, isError }
}

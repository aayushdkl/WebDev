import React from "react"

const Container = ({ style, children }) => {
  return <div className={`${style}`}>{children}</div>
}

export default Container

import React from "react"

const Card = ({ title, children }) => {
  return (
    <>
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-2">{children}</div>
      </div>
    </>
  )
}

export default Card

// Card.defaultProps = {
//   title: "DefaultTitle",
// }

{
  /* <p>This is the description for the first card</p>
<Button
  label={"FirstCard"}
  onClick={handleClick}
  variant={"primary"}
></Button> */
}

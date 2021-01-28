import React from "react"

import "./title.scss"

const Title = ({ text, background }) => {
  return (
    <>
      <div className="title">
        <h3>{text}</h3>
      </div>
    </>
  )
}

export default Title

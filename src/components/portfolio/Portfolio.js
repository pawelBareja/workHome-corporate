import React from "react"
import Gallery from "react-photo-gallery"
import { photos } from "./photos"
import "./portfolio.scss"

const Portfolio = () => {
  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default Portfolio

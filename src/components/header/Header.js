import React, { Component } from "react"
import TextLoop from "react-text-loop"
import photo from "../../assets/images/photos/new.png"

import "./header.scss"

class Header extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <img src={photo} alt={"pracownicy"} />
          <div className="jumbotron__text">
            <div>
              <TextLoop
                springConfig={{ stiffness: 200, damping: 30, interval: 3000 }}
              >
                <span> Pracuj!</span>
                <span>Mieszkaj!</span>
              </TextLoop>
              <h1>
                Profesjonalne <br />
                kwatery pracownicze
              </h1>
            </div>
            <h2>
              Kwatery pracownicze o podwyższonym <br /> standardzie, w
              korzystnej cenie <br />
            </h2>
          </div>
        </div>
      </>
    )
  }
}

export default Header

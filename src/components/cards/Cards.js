import React from "react"
import icon1 from "../../assets/images/icons/globe.jpg"

import "./cards.scss"

const bullets = [
  {
    icon: icon1,
    title: "Dogodna lokalizacja",
    text:
      "Miejsca wybrane pod kątem wygody zaopatrzenia najemców jak i logistyki dojazdu do pracy.",
  },
  {
    icon: icon1,
    title: "Standard lokali",
    text:
      "Nowe ergonomiczne meble, Internet światłowodowy czy lodówki w pokojach to tylko niektóre z naszych standardów.",
  },
  {
    icon: icon1,
    title: "Automatyka i nowoczesność",
    text:
      "Tam gdzie to możliwe stawiamy na automatyzacje procesów związanych z mediami, czy obsługą – to pewność utrzymania jakości usługi dla naszych klientów.",
  },

  {
    icon: icon1,
    title: "Jasne warunki",
    text:
      "Uczciwe i transparentne umowy najmu dzięki którym obie strony transakcji czują się bezpiecznie i komfortowo.",
  },
  {
    icon: icon1,
    title: "Wsparcie serwisowe",
    text: "Wsparcie serwisowe w okresie najmu obiektów.",
  },
]

const Cards = () => {
  return (
    <>
      <div className="cards">
        {bullets.map(tile => (
          <div className="cards__card" key={tile.title}>
            <div>
              <img src={tile.icon} alt={tile.title} />
              <h3>{tile.title}</h3>
              <p>{tile.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards

import React from "react"

import "./cards.scss"

const bullets = [
  {
    number: "1",
    title: "Dogodna lokalizacja",
    text:
      "Miejsca wybrane pod kątem wygody zaopatrzenia najemców jak i logistyki dojazdu do pracy.",
  },
  {
    number: "2",
    title: "Standard lokali",
    text:
      "Nowe ergonomiczne meble, Internet światłowodowy czy lodówki w pokojach to tylko niektóre z naszych standardów.",
  },
  {
    number: "3",
    title: "Automatyka i nowoczesność",
    text:
      "Tam gdzie to możliwe stawiamy na automatyzacje procesów związanych z mediami, czy obsługą – to pewność utrzymania jakości usługi dla naszych klientów.",
  },
  {
    number: "4",
    title: "Jasne warunki",
    text:
      "Uczciwe i transparentne umowy najmu dzięki którym obie strony transakcji czują się bezpiecznie i komfortowo.",
  },

  {
    number: "5",
    title: "Wsparcie",
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
              <h4>{tile.number}</h4>
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

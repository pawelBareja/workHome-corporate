import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/Header"
import Galeria from "../components/portfolio/Galeria"
import Title from "../components/title/Title"
import Cards from "../components/cards/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="main">
      <Header />

      {/* <Galeria /> */}

      <Cards />

      <Title text={"O nas"} />
      <p>
        Worker Home jest firmą oferującą kwatery pracownicze o podwyższonym
        standardzie i konkurencyjnej cenie. Naszym celem jest podniesienie
        poziomu rynkowego oferowanych obiektów i wyznaczenie nowego standardu
        mieszkaniowego dla pracowników i agencji pracy.
      </p>
      <p>
        {" "}
        Korzystając z wielu lat doświadczenia w branży najmu długoterminowego
        wiemy co jest najważniejsze zarówno dla agencji jak i samych
        mieszkańców.{" "}
      </p>
      <Title text={"Co nas"} background={"wyróżnia"} />

      <p>
        1. Dogodna lokalizacja – miejsca wybrane pod kątem wygody zaopatrzenia
        najemców jak i logistyki dojazdu do pracy 2. Standard lokali – nowe
        ergonomiczne meble, Internet światłowodowy czy lodówki w pokojach to
        tylko niektóre z naszych standardów. 3. Automatyka i nowoczesność – tam
        gdzie to możliwe stawiamy na automatyzacje procesów związanych z
        mediami, czy obsługą – to pewność utrzymania jakości usługi dla naszych
        klientów. 4. Wsparcie serwisowe w okresie najmu obiektów. 5. Uczciwe i
        transparentne umowy najmu dzięki którym obie strony transakcji czują się
        bezpiecznie i komfortowo.
      </p>
      <h2>Kontakt</h2>
    </div>
  </Layout>
)

export default IndexPage

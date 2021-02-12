import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/Header"

import Title from "../components/title/Title"
import Cards from "../components/cards/Cards"
import Portfolio from "../components/portfolio/Portfolio"
import Form from "../components/form/Form"
import Cookies from "../components/cookies/Cookies"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main">
      <Header />
      <section id="benefits">
        <Cards />
      </section>
      <section id="about">
        <Title text={"O nas"} />

        <p style={{ textAlign: "left" }}>
          Worker Home jest firmą oferującą kwatery pracownicze o podwyższonym
          standardzie i konkurencyjnej cenie. Naszym celem jest podniesienie
          poziomu rynkowego oferowanych obiektów i wyznaczenie nowego standardu
          mieszkaniowego dla pracowników i agencji pracy.
        </p>
        <p style={{ textAlign: "left" }}>
          {" "}
          Korzystając z wielu lat doświadczenia w branży najmu długoterminowego
          wiemy co jest najważniejsze zarówno dla agencji jak i samych
          mieszkańców.{" "}
        </p>
        <p style={{ textAlign: "left" }}>
          Skupiamy swoje działania na terenie Warszawy i szeroko pojętych okolic
          jak:
        </p>
        <ul style={{ textAlign: "left" }}>
          <li>powiat Warszawsko Zachodni</li>
          <li>Pruszkowski</li>
          <li>Piaseczyński</li>
          <li>Nowodworski </li>
          <li>Sochaczewski</li>
          <li>Żyrardowski</li>
          <li>Grodziski</li>
          <li>Grójecki</li>
        </ul>
      </section>

      <section id="cooperation">
        <Title text={"Współpraca"} />

        <p style={{ textAlign: "left" }}>
          Zależy nam na długofalowej współpracy dlatego naszym priorytetem jest
          szybkie wsparcie we wszystkich wymagających naszych kompetencji
          kwestiach. Działamy na zasadach partnerskich w których obie strony
          czują się komfortowo i bezpiecznie. Cechuje nas profesjonalizm i
          zaangażowanie. Dla stałych partnerów posiadamy również system
          BONUSowy, pozwalający na dodatkowe korzyści dla zlecających nam
          wynajem osób i firm.
        </p>
        <p style={{ textAlign: "left" }}>
          Skontaktuj się z nami i sprawdź czy możemy Ci pomóc.
        </p>
      </section>

      <section id="gallery">
        <Title text={"Galeria"} />
      </section>
      <Portfolio />
      <section>
        <Form />
      </section>
    </div>
    <Cookies />
  </Layout>
)

export default IndexPage

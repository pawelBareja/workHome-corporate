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
      </section>
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

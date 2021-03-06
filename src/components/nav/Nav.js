import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// css
import "./nav.scss"

// images
import logoDark from "../../assets/images/icons/logomain.svg"
import burgerDark from "../../assets/images/icons/menu3.svg"

const Nav = () => {
  const [menu, showMenu] = useState(true)
  const [mobileMenu, showMobileMenu] = useState(false)
  const [hovered, sethovered] = useState(false)

  const toggleMenu = e => {
    let distanceFromTop = window.pageYOffset

    return function () {
      let newDistanceFromTop = window.pageYOffset
      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        showMenu(true)
      } else {
        showMenu(false)
      }
      distanceFromTop = newDistanceFromTop
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleMenu())
    return window.removeEventListener("scroll", toggleMenu())
  }, [])

  const toggleMobileMenu = e => {
    showMobileMenu(prev => !prev)
  }

  // const mouseEnterHandler = () => sethovered(true)
  // const mouseLeaveHandler = () => {
  //   sethovered(false)
  //   setSubmenu(false)
  // }

  // const onTimeout = () => {
  //   setSubmenu(true)
  // }

  // useEffect(() => {
  //   const timer = hovered && setTimeout(onTimeout, 700)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [hovered])

  return (
    <div className={menu ? "navigation" : "navigation hide"}>
      <div className="logo" href="/">
        <span>LOGO</span>
      </div>
      <span className="burgerMenu" onClick={toggleMobileMenu}>
        <img src={burgerDark} alt="burger menu" />
        <span>menu</span>
      </span>
      <div className={mobileMenu ? "navbar--active" : "navbar"}>
        <AnchorLink
          to="/#benefits"
          className="nav--link"
          activeClassName="activeLink"
        >
          Co nas wyróżnia
        </AnchorLink>

        <AnchorLink to="/#about" className="stripped" stripHash>
          O nas
        </AnchorLink>
        <AnchorLink
          className="nav--link"
          to="/#gallery"
          activeClassName="activeLink"
        >
          Galeria
        </AnchorLink>
        <AnchorLink
          className="nav--link nav--link-custom"
          to="/#contact"
          activeClassName="activeLink"
        >
          Kontakt
        </AnchorLink>
      </div>
    </div>
  )
}

export default Nav

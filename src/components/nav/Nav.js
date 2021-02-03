import React, { useState, useEffect, useCallback } from "react"
// import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { HamburgerSlider } from "react-animated-burgers"

// css
import "./nav.scss"

// images
import logo from "../../assets/images/icons/logo.svg"

const Nav = () => {
  const [menu, showMenu] = useState(true)
  const [mobileMenu, showMobileMenu] = useState(false)

  const toggleButton = useCallback(
    () => showMobileMenu(prevState => !prevState),
    []
  )

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

  return (
    <div className={menu ? "navigation" : "navigation hide"}>
      <div className="logo" href="/">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <HamburgerSlider
        barColor={"#444"}
        className="burgerMenu"
        isActive={mobileMenu}
        {...{ mobileMenu, toggleButton }}
      />
      <div className={mobileMenu ? "navbar--active" : "navbar"}>
        <AnchorLink
          to="/#benefits"
          className="nav--link"
          activeClassName="activeLink"
          onAnchorLinkClick={() => showMobileMenu(false)}
        >
          Co nas wyróżnia
        </AnchorLink>

        <AnchorLink
          to="/#about"
          className="nav--link"
          activeClassName="activeLink"
          onAnchorLinkClick={() => showMobileMenu(false)}
        >
          O nas
        </AnchorLink>
        <AnchorLink
          className="nav--link"
          to="/#gallery"
          activeClassName="activeLink"
          onAnchorLinkClick={() => showMobileMenu(false)}
        >
          Galeria
        </AnchorLink>
        <AnchorLink
          className="nav--link nav--link-custom"
          to="/#contact"
          activeClassName="activeLink"
          onAnchorLinkClick={() => showMobileMenu(false)}
        >
          Kontakt
        </AnchorLink>
      </div>
    </div>
  )
}

export default Nav

import React from "react"
import CookieConsent from "react-cookie-consent"

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Zgoda"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      Serwis wykorzystuje pliki cookies!
    </CookieConsent>
  )
}

export default Cookies

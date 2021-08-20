import React from "react"
import Header from "./Header"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Logo from "../content/images/kakbohok-logo-big.svg"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header Logo={Logo} />
      <main className="main-body">{children}</main>
    </>
  )
}

export default Layout

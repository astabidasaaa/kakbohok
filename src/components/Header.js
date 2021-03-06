import React, { useEffect, useState, useContext } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Burger from "./Burger"
import Navigation from "./Navigation"
import MenuContext from "./MenuContext"
// import SearchContext from "./SearchContext"
import { HeaderStyles } from "../styles/NavStyles"

const Header = ({ Logo }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            address
            email
            authorSite
          }
        }
      }
    `
  )

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 23)
    })
    return () => setScroll(false)
  }, [])

  const [isOpen, setNav] = useContext(MenuContext)
  // const [isSearch, setSearch] = useContext(SearchContext)

  const toggleNav = () => {
    setNav([])
  }

  return (
    <HeaderStyles className={scroll ? "scrolled" : null}>
      <div className="head-cont">
        <Link to="/" aria-label="Homepage" onClick={toggleNav}>
          <Logo />
        </Link>
        <Burger />
      </div>
      <Navigation
        author={data.site.siteMetadata.author}
        authorSite={data.site.siteMetadata.authorSite}
        address={data.site.siteMetadata.address}
        email={data.site.siteMetadata.email}
      />
    </HeaderStyles>
  )
}

export default Header

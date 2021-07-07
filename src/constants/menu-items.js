import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/journal",
    title: "journal",
  },
  {
    path: "/contact",
    title: "contact",
  },
]

export const journalMenuItems = [
  { path: "/journal", title: "journal" },
  {
    path: "/journal/category-1",
    title: "category1",
  },
  {
    path: "/journal/category-2",
    title: "category2",
  },
  {
    path: "/journal/category-3",
    title: "category3",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bohok",
    name: "Instagram",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/bohok",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/",
    name: "GitHub",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --regularWeight: 400;
    --mediumWeight: 500;
    --boldWeight: 700;
    --heavyWeight: 900;
    --transMed: 0.1s;
    --transSlow: 0.3s;
    --black: #2B2B2B;
    --gray: #7C7C7C;
    --white: #FFFDFD;
    --blue: #3457D5;
    --lightblue: #D4DCFF;
    --serif: "Lora", serif;
    --sansSerif: "Roboto", sans-serif;
    --monospace: "Roboto Mono";
    --displayFont: "DM Serif Display";
    --h1: 3rem;
    --h2: 2.4rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --h5: 1.25rem;
    --h6: 1.125rem;
    --footerMenuItem: 0.85rem;
    --para: 1rem;
    --subPara: 0.875rem;
    --spacing: 1rem;
  }

  body {
    font-family: var(--serif);
    color: var(--black);
    font-size: var(--para);
    margin: 0;
  }

  body > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-flow: row nowrap;
    max-width: 1280px;

    @media (max-width: 900px) {
      flex-flow: column nowrap;
    }
  }

  p {
    font-size: var(--para);
    line-height: 1.35;

    @media (min-width: 768px) {
      line-height: 1.5;
    }
  }

  a {
    color: var(--charcoal);
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &:hover {
      color: var(--primaryColor);
    }
  }

  .main-body {
   
  }

  .btn {
    color: var(--black);
    text-decoration: none;
    border: none;
    background: none;
    font-family: var(--serif);
    padding: 0;
    font-size: 1rem;
    display: inline-block;
    line-height: 30px;
    position: relative;

    &-link {
      border: none;
      background-color: transparent;
      font-size: var(--h6);
      padding: 0;
      display: flex;
      font-family: var(--serif);
      color: var(--charcoal);
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 0.1rem;
        width: 100%;
        background-color: var(--charcoal);
        left: 0;
        bottom: -0.25rem;
        opacity: 1;
        transition: opacity var(--transMed);
      }

      &:hover,
      &:focus {
        cursor: pointer;

        &:after {
          opacity: 0.15;
        }
      }

      &:visited {
        text-decoration: none;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`

export default GlobalStyles

import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import HomePostRoll from "../components/HomePostRoll"
import styled from "styled-components"
import Banner from "../components/Banner"
import PropTypes from "prop-types"

const HomepageStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .hr-img {
    // overflow: hidden;
    min-height: 300px;

    img {
      min-height: 466px;
    }

    @media (max-width: 900px) {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
      margin-top: -1.5rem;
    }

    .hr-title {
      padding: 3rem 4rem;
      position: absolute;
      box-sizing: border-box;
      transform: translate(0%, -100%);

      @media (max-width: 762px) {
        width: 80%;
        padding: 2rem 1.5rem;
      }

      h1,
      p {
        color: var(--white);
        margin: 0;
      }

      p {
        margin-left: 0.25rem;
      }
    }
  }

  div.hp-posts-roll {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;

    @media (max-width: 480px) {
      flex-flow: column nowrap;
    }

    .posts-roll {
      margin-bottom: 1rem;
      flex: 1 1 20rem;
    }
  }

  div.st-line {
    width: 10rem;
    border-bottom: 2px solid var(--black);
  }
`

const Index = ({
  title,
  description,
  image,
  imageAlt,
  html,
  FeaturedPostQuery,
  LatestPostQuery,
}) => {
  const firstImg = getImage(image)
  const SEOimage = image ? image.childImageSharp.resize : null

  return (
    <>
      <Seo title={title} description={description} image={SEOimage} />
      <HomepageStyle>
        <div className="hr-img">
          <GatsbyImage image={firstImg} alt={imageAlt} />
          <div className="hr-title">
            <Banner content={title} />
            <p>{description}</p>
          </div>
        </div>
        <div className="hp-posts-roll">
          <div className="posts-roll">
            <h6>Featured Posts</h6>
            <div className="st-line" />
            {FeaturedPostQuery &&
              FeaturedPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`featured-post-${index}`} />
              ))}
          </div>
          <div className="posts-roll">
            <h6>Latest Posts</h6>
            <div className="st-line" />
            {LatestPostQuery &&
              LatestPostQuery.edges.map(({ node }, index) => (
                <HomePostRoll nodeObj={node} key={`latest-post-${index}`} />
              ))}
          </div>
        </div>
        <div className="br-line"></div>
        {html && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </HomepageStyle>
    </>
  )
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  html: PropTypes.string,
  FeaturedPostQuery: PropTypes.object.isRequired,
  LatestPostQuery: PropTypes.object.isRequired,
}

const IndexTemplate = ({ data }) => {
  const {
    HomePageQuery: { frontmatter, html },
    FeaturedPostQuery,
    LatestPostQuery,
  } = data

  return (
    <Index
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.featuredImage}
      imageAlt={frontmatter.featuredImageAlt}
      html={html}
      FeaturedPostQuery={FeaturedPostQuery}
      LatestPostQuery={LatestPostQuery}
    />
  )
}

IndexTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexTemplate

export const query = graphql`
  query IndexTemplate($slug: String!) {
    HomePageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 466)
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        featuredImageAlt
      }
      html
    }

    FeaturedPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "post-template" }
          featuredpost: { eq: true }
        }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            path
            category
            webname
          }
          timeToRead
        }
      }
    }
    LatestPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post-template" } } }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
            path
            category
            webname
          }
          timeToRead
        }
      }
    }
  }
`

import * as React from "react"
import { HeadFC, Link, PageProps, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <Link to="about">about</Link>
      <Link to="Blog">Blog Page</Link>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://www.gatsbyjs.com/static/00cce85e5293015b32d90b17e18afdaf/416ee/index-page-with-static-image-from-url.png"
        src="../images/icon.png"
    
      />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () =>  <Seo title="Home Page" />

import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


type IProps = {
  title:String
}

const Seo = ({ title }:IProps) => {

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
    <title>{data.site.siteMetadata.title}|{title}  </title>
  )
}

export default Seo
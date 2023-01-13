import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Welcome, Hello World!</h1>
      <a href="about">About</a>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

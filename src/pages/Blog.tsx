import * as React from "react";
import { PageProps, HeadFC, useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo";

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  `);
  return (
    <ul>
      {
      data.allMdx.nodes.map((node:any) => (
        <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
      ))
    }
      
    </ul>
  );
};

export const Head: HeadFC = () => <Seo title={"Blog"}></Seo>;

export default BlogPage;

import * as React from "react";
import { PageProps, HeadFC } from "gatsby";
import Seo from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";

const BlogPost: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query ($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  `);

  return (
    <div>
      <h1>Blog Page</h1>
      <p>{data.mdx.frontmatter.date}</p>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title={"Blog Post"}></Seo>;
export default BlogPost;

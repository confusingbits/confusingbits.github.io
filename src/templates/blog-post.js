import React from "react";
import moment from "moment";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      const post = data.markdownRemark;
      return (
        <div className="container">
          <div>
            <div className="row">
              <h2 className="page-header">{post.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <small>
                {moment(post.frontmatter.date).format("dddd, MMM. Do, YYYY")}
              </small>
              <h1 className="text-center page-header" />
            </div>
          </div>
        </div>
      );
    }}
  />
);

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

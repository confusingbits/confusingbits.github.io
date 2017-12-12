import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ data }) => (
  <div className="container">
    <div>
      <div className="row">
        <h1 className="text-center page-header"></h1>
      </div>
      {BlogEntries(data)}
    </div>
  </div>
)

const BlogEntries = (data) => data.allMarkdownRemark.edges.map(edge =>
  <div className='row' key={edge.node.id}>
    <h4>{edge.node.frontmatter.title}</h4>
    <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
  </div>
)

export default Blog

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter{
          title
          date
        }
        html
      }
    }
  }
}  
`
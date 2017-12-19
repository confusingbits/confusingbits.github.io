import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

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

const BlogEntries = data =>
  data.allMarkdownRemark.edges
    .filter(p => moment(p.node.frontmatter.date).diff(moment()) < 0)
    .sort((a, b) => a.node.frontmatter.date < b.node.frontmatter.date)
    .map(Post)

const Post = post =>
  <div className='row' key={post.node.id}>
    <h2 className='page-header'>{post.node.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
    <small>{moment(post.node.frontmatter.date).format('dddd, MMM. Do, YYYY')}</small>
    <h1 className="text-center page-header"></h1>
  </div>

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
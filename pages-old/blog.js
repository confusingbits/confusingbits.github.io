import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const Blog = () => (
  <Layout>
    <StaticQuery
      query={query}
      render={data => (
        <div className="container">
          <div className="row">
            <div className="col-xs-2" />
            <div className="col-xs-8">{BlogEntries(data)}</div>
            <div className="col-xs-2" />
            {/* <div className='col-xs-3'>
          <h2 className='page-header'>Previous Posts</h2>
          {getIndex(data)}
        </div> */}
          </div>
        </div>
      )}
    />
  </Layout>
)

const BlogEntries = data =>
  data.allMarkdownRemark.edges
    .filter(p => moment(p.node.frontmatter.date).diff(moment()) < 0)
    .sort((a, b) =>
      moment(b.node.frontmatter.date).diff(a.node.frontmatter.date)
    )
    .map(Post)
    .slice(0, 10)

const Post = post => (
  <div className="row" key={post.node.id}>
    <h2 className="page-header">
      <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
    </h2>
    <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
    <small>
      {moment(post.node.frontmatter.date).format('dddd, MMM. Do, YYYY')}
    </small>
    <h1 className="text-center page-header" />
  </div>
)

const getIndex = data =>
  data.allMarkdownRemark.edges
    .filter(p => moment(p.node.frontmatter.date).diff(moment()) < 0)
    .sort((a, b) => a.node.frontmatter.date < b.node.frontmatter.date)
    .map(({ node }) => (
      <h4>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h4>
    ))
    .slice(10)

export default Blog

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

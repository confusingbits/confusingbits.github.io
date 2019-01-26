import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="container">
        <div class="col-xs-2" />
        <div class="col-xs-8">
          <div className="row">
            <h2 className="page-header">{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <small>
              {moment(post.frontmatter.date).format('dddd, MMM. Do, YYYY')}
            </small>
            <h1 className="text-center page-header" />
          </div>
        </div>
        <div class="col-xs-2" />
      </div>
    </Layout>
  )
}

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
`

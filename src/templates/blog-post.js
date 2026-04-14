import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "../components/index.module.css"
import { SEO } from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header />
      <main>
        <article className={styles.blogPost}>
          <h1>{post.frontmatter.title}</h1>
          <span className={styles.blogDate}>{post.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => (
  <SEO
    title={`${data.markdownRemark.frontmatter.title} – Quita Simples`}
    description={data.markdownRemark.excerpt}
    pathname={`/blog${data.markdownRemark.fields.slug}`}
  />
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 155)
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
      fields {
        slug
      }
    }
  }
`

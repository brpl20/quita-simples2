import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "../components/index.module.css"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <html lang="pt-BR">
      <main>
        <Header />
        <article className={styles.blogPost}>
          <h1>{post.frontmatter.title}</h1>
          <span className={styles.blogDate}>{post.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Footer />
      </main>
    </html>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} – Quita Simples</title>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`

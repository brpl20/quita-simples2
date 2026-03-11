import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "../components/index.module.css"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <html lang="pt-BR">
      <main>
        <Header />
        <div className={styles.blogContainer}>
          <h1>Blog</h1>
          <ul className={styles.blogList}>
            {posts.map((post) => (
              <li key={post.fields.slug}>
                <Link to={`/blog${post.fields.slug}`}>
                  <h2>{post.frontmatter.title}</h2>
                  <span>{post.frontmatter.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </main>
    </html>
  )
}

export default BlogPage

export const Head = () => <title>Blog – Quita Simples</title>

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/blog/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

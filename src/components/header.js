import * as React from "react"
import * as styles from "../components/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>

    <Link to="/">
      <StaticImage
        src="../images/logo.png"
        alt="Quita Simples logo azul"
        placeholder="blurred"
        loading="eager"
        height={50}
      />
    </Link>

    <Link to="/">Início</Link>
    <Link to="/#vender">Por que vender?</Link>
    <Link to="/#quem-somos">Sobre nós</Link>
    <Link to="/blog">Blog</Link>
  </header>
)

export default Header

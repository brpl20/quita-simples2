import * as React from "react"
import * as styles from "../components/index.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Sobre = () => (
    <>
        <div className={styles.sobreContainer} id="quem-somos">
            <div className={styles.sobreTexto}>
                <h2>Por que confiar no <br />Quita Simples?</h2>
                <p>O Quita Simples é uma empresa <br /> especializado na <strong>compra de precatórios.</strong> <br /> Oferecemos uma <strong>solução rápida e prática</strong> <br /> para aqueles que não querem esperar anos <br /> para ter acesso ao seu dinheiro.</p>
                <a href="https://wa.me/553530420920/?text=Ol%C3%A1%20tenho%20interesse%20de%20vender%20meu%20precat%C3%B3rio"><button>Vender meu precatório</button></a>
            </div>
            <StaticImage
                src="../images/fotoCasal.jpg"
                alt="Casal feliz"
                placeholder="blurred"
                loading="lazy"
                width={500}
            />
        </div>
    </>
)
export default Sobre

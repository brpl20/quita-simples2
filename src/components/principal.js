import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../components/index.module.css";

const Principal = () => (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.div1}>
                <h2>Com a gente é tudo mais <br /> simples. <strong>Não perca mais tempo <br />
                    esperando </strong>pelo pagamento dos <br /> seus precatórios.</h2>
                <a href="https://wa.me/553530420920/?text=Ol%C3%A1%20tenho%20interesse%20de%20vender%20meu%20precat%C3%B3rio"><button>Receber meu precatório</button></a>
            </div>

            <div className={styles.div2}>
                <StaticImage
                    src="../images/ilustracao-quita-simples.png"
                    alt="Mulher despreocupada, por que teve seu tempo salvo com a Quita Simples"
                    placeholder="blurred"
                    loading="lazy"
                    height={350}
                />
            </div>
        </div>
    </>
)

export default Principal

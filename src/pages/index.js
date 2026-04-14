import * as React from "react";
import Header from "../components/header";
import Vender from "../components/vender";
import Principal from "../components/principal";
import Sobre from "../components/sobre";
import Footer from "../components/footer";
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Principal />
        <Vender />
        <Sobre />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO
    title="Quita Simples – Simplificando o pagamento dos seus precatórios"
    description="Compramos seu precatório de forma rápida e segura. Receba seu dinheiro à vista em até 24 horas. Solução simples para seus precatórios federais e estaduais."
    pathname="/"
  />
);

import React from "react";
import "./style.css";
import { Container } from "@material-ui/core";
import fernanda from "../../assets/Fernanda.jpg"
import samuel from "../../assets/bob.jpg"

export const Footer = () => {
  return (
    <div style={{width: '100%'}}>
      <div className="footer-container" >
        <div className="footer-components">
          <img src={fernanda} alt="authorPhoto" className="image-credit" />
          <div style={{ width: "50%" }}>
            <h3 className="infos-title">Fernanda - Autora</h3>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>Sou Fernanda Kelly, aluna da Escola Técnica em Enfermagem de Minas Gerais, gosto de ler e me informar sobre assuntos relacionados à saúde visando proporcionar informações confiáveis aos leitores.</p>
          </div>
        </div>
        <div className="footer-components">
          <img src={samuel} alt="authorPhoto" className="image-credit" />
          <div style={{ width: "50%" }}>
            <h3 className="infos-title">Samuel - Bob</h3>
            <p style={{ textAlign: "justify", fontSize: "14px" }}>Sou Samuel Bernardes, formado em Técnico em Informática pelo IFMG, trabalho como estágio em desenvolvimento de software, e em meu tempo livre gosto de jogar online. </p>
          </div>
        </div>
        <div className="footer-components bibliografia" >
          <h3 className="infos-title">Bibliografia: </h3>
          <i style={{ textAlign: "justify", fontSize: "12px" }}>REDE D'OR SÃO LUIZ (org.). AIDS: o que é aids?. O que é aids?. 2022. Disponível em: https://www.rededorsaoluiz.com.br/doencas/aids. Acesso em: 08 mar. 2022.
            <br /> Ministério da Saúde. O que é HIV: biologia. Biologia. 2022. Disponível em: http://www.aids.gov.br/pt-br/publico-geral/o-que-e-hiv. Acesso em: 08 mar. 2022</i>
        </div>
      </div>
      <div style={{ width: "100%", height: "50px", backgroundColor: "#1A7F79", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <a style={{ color: "#F2F2F2" }}>https://fernandakelly.vercel.app - @2022</a>
      </div>
    </div>
  );
};

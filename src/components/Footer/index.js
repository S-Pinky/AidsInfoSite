import React from "react";
import "./style.css";
import Logo from "../../assets/logoDoctoralia.png";
import { Facebook, Instagram, LinkedIn, PhoneIphone } from "@material-ui/icons";
import { FooterBoxes } from "./footerComponents";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {FooterBoxes("Serviço", [
          "Privacidade e cookies",
          "Quem somos",
          "Contato",
          "Vagas",
          "Termos e Condições",
          "Imprensa",
        ])}
        {FooterBoxes("Pacientes", [
          "Especialistas",
          "Clínicas e Hospitais",
          "Pergunte ao especialista",
          "Medicamentos",
          "Serviços",
          "Perguntas frequentes",
          "Aplicações Móveis",
          "Diagnósticos por imagem",
        ])}
        {FooterBoxes("Especialistas da saúde", [
          "Blog",
          "Counteúdos para especialistas",
          "Serviços",
          "Biblioteca Virtual",
          "Widget para site",
          "Counteúdos para clínicas",
          "Central de Ajuda para Especialistas",
          "Termos de uso do perfil profissional",
          "Alerta de segurança",
          "Teleconsulta",
        ])}
        <div>
          {FooterBoxes(
            <img
              src={Logo}
              style={{ width: "25px", height: "25px" }}
              alt="logo"
            />,
            [
              "Doctoralia Brasil Serviços Online e Software Ltda",
              "Rua Visconde do Rio Branco, 1488 - 2º andar - Batel",
              "80420-210 Curitiba (Paraná), Brasil",
            ],
            <h4
              style={{
                margin: "0px 0px 0px 5px",
                color: "#01c4a6",
                fontSize: "27px",
              }}
            >
              Doctoralia
            </h4>
          )}
          <div className="social">
            <a href="https://www.facebook.com/doctoralia.br/">
              <Facebook style={{ color: "gray", fontSize: 35 }} />
            </a>
            <a href="https://www.instagram.com/doctoralia_br/">
              <Instagram style={{ color: "gray", fontSize: 35 }} />
            </a>
            <a href="https://www.linkedin.com/company/doctoralia-brasil/">
              <LinkedIn style={{ color: "gray", fontSize: 35 }} />
            </a>
            <a href="https://www.facebook.com/doctoralia.br/">
              <PhoneIphone style={{ color: "gray", fontSize: 35 }} />
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px rgba(0, 0, 0, .09) solid" }}>
        <p style={{ textAlign: "center", margin: "0px", padding: "10px" }}>
          www.doctoralia.com.br © 2021 - Agende agora sua consulta
        </p>
      </div>
    </footer>
  );
};

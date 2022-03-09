import React, { useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { Button, Autocomplete, TextField, Rating } from "@material-ui/core";
import {
  Apartment,
  VideocamRounded,
  Search,
  Favorite,
  EventAvailable,
  Schedule,
  ThumbUpAlt,
} from "@material-ui/icons";

import { widget } from "../../components/Home/index";
import { createDoctorInfo } from "../../components/DoctorsHome/index";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";

import { specialty } from "../../services/specialty-mock";
import { cities } from "../../services/cities-mock";

export const Home = ({
  setSelectCity,
  setSelectSpecialty,
  setCheckCrm,
  selectCity,
  selectSpecialty,
}) => {
  //Home igual para todas páginas
  const [variant, setVariant] = useState("inlocal");

  return (
    <>
      {setCheckCrm("")}
      <div className="geral-home">
        <div className="text">
          <h3 className="title-text">Agende Agora Sua Consulta</h3>
          <p style={{ paddingTop: "5px", margin: "0" }}>
            Mais de 700 mil especialistas de saúde estão prontos para te ajudar
          </p>
        </div>
        <div className="container">
          <div className="container-search">
            <div className="types">
              <Button
                color="inherit"
                variant={variant === "inlocal" ? "contained" : "outlined"}
                style={{
                  marginRight: "10px",
                  height: "45px",
                  color: "black",
                  borderRadius: "5px",
                }}
                startIcon={<Apartment />}
                onClick={() => setVariant("inlocal")}
              >
                No local
              </Button>
              <Button
                color="inherit"
                variant={variant === "teleconsult" ? "contained" : "outlined"}
                style={{
                  marginRight: "10px",
                  height: "45px",
                  color: "black",
                  borderRadius: "5px",
                }}
                startIcon={<VideocamRounded />}
                onClick={() => setVariant("teleconsult")}
              >
                Teleconsulta
              </Button>
            </div>
            <div className="container-input">
              <Autocomplete
                style={{ padding: "5px 5px 5px 0px" }}
                mode=""
                disablePortal
                id="combo-box-demo"
                options={specialty}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    style={{ backgroundColor: "ghostwhite", color: "black" }}
                    {...params}
                    onClick={setSelectSpecialty(params.inputProps.value)}
                    label="nome, especialidade, serviço"
                  />
                )}
              />

              {variant === "inlocal" && (
                <Autocomplete
                  style={{ padding: "5px 5px 5px 0px" }}
                  disablePortal
                  id="combo-box-demo"
                  options={cities}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      style={{ backgroundColor: "ghostwhite", color: "black" }}
                      {...params}
                      onClick={setSelectCity(params.inputProps.value)}
                      label="p. ex. São Paulo"
                    />
                  )}
                />
              )}

              <Link
                to={
                  selectCity === "" && selectSpecialty === "" ? "/" : "/doctors"
                }
                style={{
                  textDecoration: "none",
                  cursor:
                    selectCity === "" && selectSpecialty === ""
                      ? "default"
                      : "pointer",
                }}
              >
                <Button
                  variant="contained"
                  disabled={selectCity === "" && selectSpecialty === ""}
                  style={{ height: "58px", margin: "5px", width: "250px" }}
                  endIcon={<Search />}
                >
                  Pesquisar
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-alerts">
          <div className="alerts-top">
            <Favorite style={{ paddingLeft: "10px" }} />
            <p style={{ paddingLeft: "5px", fontWeight: "bold" }}>
              Cuide de sua saúde durante a pandemia
            </p>
          </div>
          <div className="alerts-bottom">
            <p className="text-alert-bottom">
              Atendimento médico seguro e sem filas
            </p>
            <p className="link-alert-bottom" style={{ cursor: "pointer" }}>
              Receba a ajuda que precisa {"->"}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="geral-home-bottom">
        <div className="specialtys">
          <div className="sides">
            <Link to="/" className="links-side">
              Ginecologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Psiquiatra
            </Link>
            <li />
            <Link to="/" className="links-side">
              Psicólogo
            </Link>
            <li />
            <Link to="/" className="links-side">
              Dermatologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Ortopedista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Endocrinologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Oftalmologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              {" "}
              Cardiologista
            </Link>
          </div>
          <div className="sides">
            <Link to="/" className="links-side">
              Dentista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Neurologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Nutricionista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Urologista
            </Link>
            <li />
            <Link to="/" className="links-side">
              Homeopata
            </Link>
            <li />
            <Link to="/" className="links-side">
              Educador Físico
            </Link>
            <li />
            <Link to="/" className="links-side">
              Radiologista
            </Link>
          </div>
        </div>
        <div className="widgets">
          {widget(
            <Search style={{ color: "#01c4a6", fontSize: 35 }} />,
            "Encontre Especialistas",
            "Busque por especialistas de saúde em sua região. Filtre por planos de saúde, tratamentos ou disponibilidade."
          )}
          {widget(
            <EventAvailable style={{ color: "#01c4a6", fontSize: 35 }} />,
            "Marque Consultas",
            "Escolha o profissional, dia e horário que desejar, agendando sua consulta em até dois minutos. Sem complicação."
          )}
          {widget(
            <Schedule style={{ color: "#01c4a6", fontSize: 35 }} />,
            "Receba lembretes",
            "Confirmamos tudo imediatamente pelo email informado e, antes da consulta, um lembrete será enviado via celular."
          )}
          {widget(
            <ThumbUpAlt style={{ color: "#01c4a6", fontSize: 35 }} />,
            "Avalie o serviço",
            "Após a consulta você poderá deixar sua opinião sobre o serviço. Tudo isso de forma gratuita, simples e rápida."
          )}
        </div>
        <div className="doctors-info">
          <div className="left-side">
            <h3>Respostas de especialistas</h3>
            <p style={{ fontSize: "15px" }}>
              Qual a chance de desenvolver câncer Orofaringe após o contágio com
              hpv ?
            </p>
            <p
              style={{
                color: "GrayText",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              RESPOSTA DO ESPECIALISTA DA SAÚDE:{" "}
            </p>
            {createDoctorInfo(
              avatar1,
              "Dra. Fernanda Martinho Dobrianskyj",
              "Olá… o desenvolvimento do câncer devido infecção do HPV depende muito do tipo de vírus que foi identificado na lesão. Veja com seu médico se foi feito a tipagem deste vírus. Boa sorte!"
            )}
            <p style={{ fontSize: "15px" }}>
              Quais são os cuidados do pós operatório de uma fístula Liquorica
              pelo nariz, e quanto tempo dura a recuperação?
            </p>
            <p
              style={{
                color: "GrayText",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              RESPOSTA DO ESPECIALISTA DA SAÚDE:{" "}
            </p>
            {createDoctorInfo(
              avatar2,
              "Bruno Loof",
              "Olá, os principais cuidados envolvem evitar qualquer esforço físico, assim como assoar o nariz. O tratamento da fístula liquorica por via nasal, demanda tempo de recuperação que varia de paciente para paciente. Seu cuidado com as medidas que seu médico orientou irá fazer toda a diferença no resultado da cirurgia. Espero ter ajudado."
            )}
          </div>
          <div className="right-side">
            <h3>Opiniões mais recentes</h3>
            {createDoctorInfo(
              avatar3,
              "Fernando Zahorcsak",
              "Excelente profissional muito atencioso tenho muita a agradecer palavras são poucas o Dr Fernando passa uma confiança aos seus pacientes",
              <Rating name="read-only" value={5} readOnly />,
              "Agnaldo Reis dos Santos"
            )}
            {createDoctorInfo(
              avatar4,
              "Humberto Dantas",
              "Hoje foi minha primeira consulta e já gostei muito. Começar o tratamento me sentindo bem segura com o resultado.",
              <Rating name="read-only" value={5} readOnly />,
              "Ana Kátia"
            )}
            {createDoctorInfo(
              avatar5,
              "Beatriz Turquiai Luca Blasio",
              "Dra. Muito atenciosa e explica muito bem! Gostei da postura dela. Agora vamos dar continuidade ao tratamento para verificar os resultados",
              <Rating name="read-only" value={5} readOnly />,
              "Renata Machado"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

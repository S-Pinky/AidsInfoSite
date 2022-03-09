import React from "react";
import "./style.css";
import asset1 from "../../assets/asset1.svg";
import Infos from "../../components/Infos/Infos";

import { Container, Grid } from "@material-ui/core";
import { Fingerprint, Favorite, Healing } from "@material-ui/icons";

export function Blog() {
  return (
    <div style={{ height: '100%' }}>
      <div id="inicio">
        <Container maxWidth="xl" className="container-initial" align="center" >
          <Grid container >
            <Grid item xs={12} lg={7} md={8} >
              <h1 className="title">
                Você sabe o que é {" "}
                <strong style={{ color: "#FF4958" }}>aids</strong> ?
              </h1>
              <div style={{ padding: '20px', paddingTop: 0 }}>
                <p className="text">
                  HIV é a sigla em inglês para vírus da imunodeficiência humana, causador da aids.
                  É uma infecção causada pelo vírus HIV que ataca o sistema imunológico, responsável por
                  defender o organismo de doenças, e faz com que o paciente sofra com os sintomas de
                  neoplasias (infecções causadas por diversos organismos que acometem indivíduos com a
                  imunidade baixa), tornando-o mais suscetível a esses problemas de saúde que podem levar o indivíduo a morte.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={5} md={4}>
              <img className="asset" src={asset1} alt="imagemAsset1" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div id="sobre">

      <Container maxWidth="xl" className="container-secondary " >
        <Grid container align="center" spacing={6}>
          <Grid item xs={12} lg={4} md={4}>
            <Healing className="circles" sx={{ fontSize: "60px" }} />

            <Infos
              title="Sintomas"
              text="Como os sintomas do HIV são bem difíceis de se identificar é importante que caso a pessoa
              tenha tido algum tipo de exposição de risco ao vírus ela faça imediatamente o teste de HIV, o
              teste tem o objetivo de detectar a presença do vírus no organismo e deve ser feito após 30
              dias da exposição de risco ao vírus como contato com sangue ou secreções de pessoas
              portadoras do vírus ou relações sexuais desprotegidas."
            />
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Favorite className="circles" sx={{ fontSize: "60px" }} />

            <Infos
              title="Tratamento"
              text="O tratamento para o HIV acontece por meio do uso de medicamentos conhecidos
              como antirretrovirais, que atuam impedindo que o vírus HIV se multiplique de maneira
              exagerada. Esses medicamentos não são capazes de destruírem por completo o vírus, mas são
              essenciais para evitar que o sistema imunológico fique gravemente comprometido, e que
              doenças oportunistas venham a agravar o quadro."
            />
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <Fingerprint className="circles" sx={{ fontSize: "60px" }} />

            <Infos
              title="Prevenção"
              text="Além do uso de preservativos masculino ou feminino durante a relação sexual, também é
              importante estar atento ao uso de agulhas. Nos casos em que a gestante convive com o HIV, é
              fundamental que a gravidez seja acompanhada por médicos, além do uso de medicamentos.
              Os tratamentos são realizados por meio de medicamentos, com o objetivo de proteger o
              sistema imunológico, bloqueando a multiplicação do HIV, o tratamento visa priorizar o bemestar do indivíduo"
            />
          </Grid>
        </Grid>
      </Container>
      </div>
      <div id="entenda">

      <Container maxWidth="xl" className="container-initial" style={{ paddingTop: "4%", paddingBottom: "4%" }} >
        <Grid container align="center" spacing={1}>
          <Grid item xs={12} lg={6} md={6}>
            <div style={{ padding: "0px 20px" }}>
              <h2 style={{ color: "#FF4958" }} className="subTitle">Como ocorre a transmissão? </h2>
              <p className="subText" >
                O HIV pode ser transmitido de diversas formas, entretanto, a principal forma de transmissão é
                por via sexual. Além da transmissão por sexo desprotegido, ela também pode ocorrer da mãe
                para o filho durante a gravidez, parto ou amamentação e por meio do contato com sangue de
                pessoa infectada. O contato com o sangue pode ocorrer, por exemplo, no compartilhamento
                de seringas ao se fazer uso de drogas injetáveis, em acidentes de trabalho com profissionais da
                saúde que manuseiam material contaminado ou mesmo em transfusões de sangue. É
                importante frisar que beijar, pegar na mão, abraçar, compartilhar objetos, não transmite o
                HIV, ao menos que haja algum veículo de transmissão pelo sangue durante esse contato, a
                prevenção da doença pode ser feita através do uso de camisinha durante relações sexuais e o
                não compartilhamento de objetos que tenham tido contato com o sangue da pessoa infectada
                como seringas e agulhas. É muito importante que todas as gestantes façam o pré-natal para se
                evitar a transmissão do HIV para o bebê caso a mãe seja HIV positiva.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <iframe
              width="100%"
              style={{ paddingTop: 62 }}
              height="400"
              src="https://www.youtube.com/embed/k6C_dpbJ1zc"
              title="YouTube video player"
              frameborder="0"
              modestbranding="1"
              controls="0"
              showinfo="0"
              rel="0"
              fs="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
      </div>
    </div >
  );
}

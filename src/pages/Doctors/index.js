import React from "react";
import "./style.css";

import { Button, Rating } from "@material-ui/core";

import {
  EventAvailable,
  Fingerprint,
  Message,
  Payment,
  People,
  Security,
} from "@material-ui/icons";

import { doctors } from "../../services/doctors-mock";

import { createDoctorInfo } from "../../components/DoctorsHome";

export const Doctors = ({
  selectCity,
  selectSpecialty,
  checkCrm,
  setCheckCrm,
}) => {
  return checkCrm === "" ? (
    selectCity === "" || selectSpecialty === "" ? (
      <div className="main">
        <h2>{selectSpecialty}{selectCity}</h2>
        <div className="doctors-container">
          {doctors.map(
            (doctor) =>
              doctor.specialty === selectSpecialty && (
                <h2>
                  <div style={{ display: "flex" }}>
                    <div className="left">
                      {createDoctorInfo(
                        doctor.photo,
                        doctor.name,
                        doctor.specialty,
                        <Rating
                          sx={{ fontSize: "20px" }}
                          readOnly
                          value="5"
                          style={{}}
                        />,
                        doctor.contactNumber,
                        setCheckCrm,
                        doctor.crm
                      )}
                      <div className="infos">
                        <p
                          style={{
                            margin: 0,
                            padding: 10,
                            color: "GrayText",
                            textAlign: "initial",
                          }}
                        >
                          {doctor.description}
                        </p>
                        <p
                          style={{ margin: 0, padding: 10, color: "GrayText" }}
                        >
                          {doctor.andress}
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <p style={{ fontWeight: "lighter" }}>
                        Sed molestie neque sed purus tempus cursus. Etiam eu
                        faucibus sapien, ut feugiat lectus. Cras tortor ex,
                        aliquam eget consectetur non, viverra sed metus. Aliquam
                        erat volutpat. Mauris rhoncus leo sapien, ac semper
                        lectus euismod non. Mauris iaculis sit amet ex ac
                        lacinia. In tincidunt gravida ex quis egestas. Phasellus
                        maximus eros vitae metus pellentesque faucibus. Aliquam
                        sagittis bibendum arcu, sit amet molestie odio tristique
                        vel. Vivamus nec vestibulum mauris. Aenean iaculis et
                        urna in maximus. In ultricies dui sed neque sollicitudin
                        ultrices. In venenatis, purus sed vulputate rutrum,
                        tortor magna varius felis, nec consectetur est purus eu
                        elit. Ut condimentum porta neque eget porta. Sed ut quam
                        dignissim velit commodo varius nec ac metus. Aliquam
                        elementum dui laoreet consectetur venenatis.
                      </p>
                    </div>
                  </div>
                </h2>
              )
          )}
        </div>
      </div>
    ) : (
      <div className="main">
        <h2>
          {selectSpecialty}, {selectCity}
        </h2>
        <div className="doctors-container">
          {doctors.map(
            (doctor) =>
              doctor.specialty === selectSpecialty &&
              doctor.city === selectCity && (
                <h2>
                  <div style={{ display: "flex" }}>
                    <div className="left">
                      {createDoctorInfo(
                        doctor.photo,
                        doctor.name,
                        doctor.specialty,
                        <Rating
                          sx={{ fontSize: "20px" }}
                          readOnly
                          value="5"
                          style={{}}
                        />,
                        doctor.contactNumber,
                        setCheckCrm,
                        doctor.crm
                      )}
                      <div className="infos">
                        <p
                          style={{
                            margin: 0,
                            padding: 10,
                            color: "GrayText",
                            textAlign: "initial",
                          }}
                        >
                          {doctor.description}
                        </p>
                        <p
                          style={{ margin: 0, padding: 10, color: "GrayText" }}
                        >
                          {doctor.andress}
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <p style={{ fontWeight: "lighter" }}>
                        Sed molestie neque sed purus tempus cursus. Etiam eu
                        faucibus sapien, ut feugiat lectus. Cras tortor ex,
                        aliquam eget consectetur non, viverra sed metus. Aliquam
                        erat volutpat. Mauris rhoncus leo sapien, ac semper
                        lectus euismod non. Mauris iaculis sit amet ex ac
                        lacinia. In tincidunt gravida ex quis egestas. Phasellus
                        maximus eros vitae metus pellentesque faucibus. Aliquam
                        sagittis bibendum arcu, sit amet molestie odio tristique
                        vel. Vivamus nec vestibulum mauris. Aenean iaculis et
                        urna in maximus. In ultricies dui sed neque sollicitudin
                        ultrices. In venenatis, purus sed vulputate rutrum,
                        tortor magna varius felis, nec consectetur est purus eu
                        elit. Ut condimentum porta neque eget porta. Sed ut quam
                        dignissim velit commodo varius nec ac metus. Aliquam
                        elementum dui laoreet consectetur venenatis.
                      </p>
                    </div>
                  </div>
                </h2>
              )
          )}
        </div>
      </div>
    )
  ) : (
    <div className="main">
      <h2>
        {selectSpecialty} {selectCity} - Detalhes
      </h2>
      <div className="doctors-container">
        {doctors.map(
          (doctor) =>
            doctor.crm === checkCrm && (
              <h2>
                <div style={{ display: "flex" }}>
                  <div className="left">
                    {createDoctorInfo(
                      doctor.photo,
                      doctor.name,
                      doctor.specialty,
                      <Rating
                        sx={{ fontSize: "20px" }}
                        readOnly
                        value="5"
                        style={{}}
                      />,
                      doctor.contactNumber,
                      setCheckCrm,
                      doctor.crm
                    )}
                    <div className="infos">
                      <p
                        style={{
                          margin: 0,
                          padding: 10,
                          color: "GrayText",
                          textAlign: "initial",
                        }}
                      >
                        {doctor.description}
                      </p>
                      <p style={{ margin: 0, padding: 10, color: "GrayText" }}>
                        {doctor.andress}
                      </p>
                    </div>
                    <div className="more-info">
                      <h3 style={{ fontSize: "20px", margin: "5px" }}>
                        Informações
                      </h3>
                      <div className="micro-info">
                        <Payment style={{ color: "#01c4a6" }} />
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "lighter",
                            color: "GrayText",
                            marginLeft: "3px",
                          }}
                        >
                          Cartão de Débito, Cartão de Crédito, Pix ou dinheiro.
                        </p>
                      </div>
                      <div className="micro-info">
                        <People style={{ color: "#01c4a6" }} />
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "lighter",
                            color: "GrayText",
                            marginLeft: "3px",
                          }}
                        >
                          Atende: adultos, crianças de qualquer idade
                        </p>
                      </div>
                      <div className="micro-info">
                        <Security style={{ color: "#01c4a6" }} />
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "lighter",
                            color: "GrayText",
                            marginLeft: "3px",
                          }}
                        >
                          Aceita somente pacientes particulares neste endereço
                        </p>
                      </div>
                      <div className="micro-info">
                        <Fingerprint style={{ color: "#01c4a6" }} />
                        <p
                          style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "lighter",
                            color: "GrayText",
                            marginLeft: "3px",
                          }}
                        >
                          CRM: {doctor.crm}
                        </p>
                      </div>
                      <div className="micro-info">
                        <Button
                          variant="contained"
                          style={{ alignItems: "center", margin: "5px" }}
                        >
                          {" "}
                          <EventAvailable /> Agendar Consulta{" "}
                        </Button>
                        <Button
                          variant="outlined"
                          style={{ alignItems: "center", margin: "5px" }}
                        >
                          {" "}
                          <Message /> Enviar Mensagem{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <iframe
                      width="650"
                      height="450"
                      src="https://www.youtube.com/embed/tAk53kjdKmU"
                      title="Medical Video"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      style={{
                        border: "2px solid #01c4a6",
                        borderRadius: "5px",
                      }}
                    ></iframe>
                  </div>
                </div>
              </h2>
            )
        )}
      </div>
    </div>
  );
};

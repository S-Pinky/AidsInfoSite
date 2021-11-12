import React from "react";
export function FooterBoxes(title, text, sideimage) {
  //SIDEIMAGE É PRA COLOCAR UM TEXTO QUANDO TIVER IMAGEM. Foi uma maneira que eu pensei para conseguir padronizar todo o footer.
  //NAS TAGS QUE EU USAR UM VALOR QUE CHEGA DA FUNÇÃO, EU NÃO CONSIGO FAZER O CSS LÁ NO STYLES.CSS, POR ISSO TENHO QUE FAZER AQUI :/
  return (
    <div className="content-footer-box">
      <div className="top-side-footer">
        <h4
          style={{
            margin: "0px 0px 10px 0px",
            fontWeight: "normal",
            color: "#627282",
            fontSize: "16px",
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title} {sideimage}
        </h4>
        {text.map((text) => (
          <p
            style={{
              margin: "5px 0px 5px 0px",
              opacity: "0.9",
              fontSize: "14px",
              textAlign: "start",
              color: "#A5A1AB",
              fontFamily: "roboto",
              textDecoration: "none",
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

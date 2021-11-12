import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

export function createDoctorInfo(
  avatar,
  name,
  description,
  rating,
  author,
  setCheckCrm,
  crm
) {
  return (
    <div className="media">
      <div className="avatar-div">
        <img
          src={avatar}
          alt='avatar'
          style={{ width: "60px", borderRadius: "5px", height: "60px" }}
        ></img>
      </div>

      <div className="content-div">
        <div className="name-rating">
          <Link
            to="/doctors"
            style={{
              textDecoration: "none",
              color: "blue",
              paddingLeft: "5px",
            }}
            className="doctor-name"
            onClick={() => {
              setCheckCrm(crm);
            }}
          >
            {name}
          </Link>
          {!!rating ? rating : null}
        </div>
        <p style={{ padding: "5px", margin: "0", fontSize: "14px" }}>
          {description}
        </p>
        {!!author ? (
          <p
            style={{
              fontSize: "17px",
              padding: "5px",
              fontWeight: "lighter",
              color: "rgba(0,0,0,0.7)",
              margin: "0",
            }}
          >
            {author}
          </p>
        ) : null}
      </div>
    </div>
  );
}

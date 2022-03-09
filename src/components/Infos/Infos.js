import React from "react";
import "./style.css";

export default function Infos(props) {

    return (
        <div>
            <h3 className="subtitle">
                {props.title}
            </h3>
            <p style={{textAlign: 'justify', marginTop: 10}}>
                {props.text}
            </p>
        </div>
    );
};

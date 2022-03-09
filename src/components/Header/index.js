import React, { useState } from "react";
import "./style.css";

export default function Header() {

    const [mobile, setMobile] = useState(false)
    
    function HandleClick() {
        setMobile(!mobile)
    }

    return (
        <header style={{position: "fixed", width: "100%"}}>
            <nav >
                <a className="logo" href="/">Pro Health</a>
                <div className={mobile ? "mobile-menu active" : "mobile-menu"} onClick={HandleClick} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={mobile ? "nav-list active" : "nav-list"} > 
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#entenda">Entenda</a></li>
                    <li><a href="#creditos">Créditos</a></li>
                </ul>
            </nav>
        </header>
    );
};

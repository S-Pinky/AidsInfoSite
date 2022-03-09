import React from "react";
import "./style.css";

export function widget(img, title, text) {
  return (
    <div className="content-widget">
      <div className="top-side">
        <>{img}</>
        <>{title}</>
      </div>
      <p className="bottom-side">{text}</p>
    </div>
  );
}

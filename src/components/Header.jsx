import React from "react";
import Tag from "./Tag";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  return (
    <div className="headerContainer">
      <FontAwesomeIcon icon={faItalic} className = 'icon'/>
      <div className="tags">
        <Tag defenitation="protfolio"></Tag>
        <Tag defenitation="protfolio"></Tag>
        <Tag defenitation="protfolio"></Tag>
      </div>
    </div>
  );
}

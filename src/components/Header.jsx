import React from "react";
import Tag from "./Tag";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  return (
    <div className={props.headerClass}>
      <FontAwesomeIcon icon={faItalic} className="icon" />
      <div className="tags">
        <Tag href="#myWorks" defenitation="My works"></Tag>
        <Tag href="#education" defenitation="Education"></Tag>
        <Tag href="#profolio" defenitation="protfolio"></Tag>
      </div>
    </div>
  );
}

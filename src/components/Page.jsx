import React from "react";

export default function Page(props) {
  return (
    <div className={props.kind} id={props.id}>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <div className="images">
        <a className={props.class1} href='https://izak270.github.io/minecraft/'>
          <img src={props.pic}   alt="" />
        </a>
        <a className={props.class1} href='https://izak270.github.io/Memory-game-/.'>
          <img src={props.pic1}  alt="" />
        </a>
        <a className={props.class1} href=''>
          <img src={props.pic2}  alt="" />
        </a>
      </div>
    </div>
  );
}

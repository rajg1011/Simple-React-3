import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={style.button}>
      {props.children}
    </button>
  );
};

export default Button;

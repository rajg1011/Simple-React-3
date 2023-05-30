import React from "react";
import Button from "../UI/button";
import style from "./warning.module.css";

const Warning = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />{" "}
      {/*Look carefully in div.*/}
      <div className={style["outer-card"]}>
        <div className={style["heading-div"]}>
          <p>{props.heading}</p>
        </div>
        <div className={style["inner-div"]}>
          <div className={style["inner-div_data"]}>
            <p>{props.message}</p>
          </div>
          <div className={style["inner-div_button"]}>
            <Button type="button" onClick={props.onConfirm}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;

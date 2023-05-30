import React from "react";
import style from "./css/itemsAdded.module.css";

const ItemsAdded = (props) => {

  return (
    <div className={style["itemAdded_outer"]}>
      <p>
        {props.username} ({props.age} years old){" "}
      </p>
    </div>
  );
};

export default ItemsAdded;

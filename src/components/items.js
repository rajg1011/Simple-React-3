import React, { useState } from "react";
import Form from "./form";
import data from "../data/data";
import Warning from "./Warning/warning";
import ItemsAdded from "./itemsAdded";
import Card from "./card/card";

const Items = () => {
  const [dataInArray, dataInArrayFunction] = useState(data);
  const [changeUI, changeUIFunction] = useState({
    changeBoolean: false,
    changeheading: "",
    changeMessage: "",
  });

  const FormSubmitDataGetHandler = (dataGet) => {
    if (dataGet.username.trim().length === 0) {
      changeUIFunction({
        changeBoolean: true,
        changeheading: "Invalid Username",
        changeMessage: "Please Enter Some Data",
      });
      return;
    } else if (dataGet.age < 1) {
      changeUIFunction({
        changeBoolean: true,
        changeheading: "Invalid Age",
        changeMessage: "Age must be >0",
      });
      return;
    }
    // If above conditions fails then useState help to add data in array.

    dataInArrayFunction((pre) => {
      const objGet = {
        id: Math.round().toString(),
        ...dataGet,
      };
      return [...pre, objGet];
    });
    // console.log(dataInArray);  // here it will give just data that is earlier in array
  };
  // console.log(dataInArray);  //But here it will add that data. Actually it will add there when we call return in FormSubmitDataGetHandler but not shown in dataInarray const.

  const errorHandler = () => {
    changeUIFunction({
      changeBoolean: false,
      changeheading: "",
      changeMessage: "",
    });
  };

  return (
    <div>
      {changeUI.changeBoolean && (
        <Warning
          heading={changeUI.changeheading}
          message={changeUI.changeMessage}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <Form
          label1="Username"
          label2="Age (Years)"
          onFormSubmitDataGet={FormSubmitDataGetHandler}
        />
      </Card>
      <Card>
        {dataInArray.map((data) => (
          <ItemsAdded key={data.id} username={data.username} age={data.age} />
        ))}{" "}
        {/*Remember when we do something like this (map) then use key also.. either if u dont want it in ur prop*/}
      </Card>
    </div>
  );
};

export default Items;

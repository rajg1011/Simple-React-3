import React, { useState } from "react";
import "./css/form.module.css";
import Button from "./UI/button";

const Form = (props) => {
  const [savedState, savedStateFunction] = useState({
    username: "",
    age: "",
  });

  const onlabel1Change = (event) => {
    savedStateFunction((pre) => {
      return { ...pre, username: event.target.value };
    });
  };

  const onlabel2Change = (event) => {
    savedStateFunction((pre) => {
      return { ...pre, age: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formSaved = {
      username: savedState.username,
      age: +savedState.age,
    };
    props.onFormSubmitDataGet(formSaved);
    savedStateFunction({
      username: "",
      age: "",
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>{props.label1}</label>
      <input
        type="text"
        value={savedState.username}
        onChange={onlabel1Change}
      />
      <label>{props.label2}</label>
      <input type="number" value={savedState.age} onChange={onlabel2Change} />
      <Button type="Submit">Add User</Button>
    </form>
  );
};

export default Form;


// With useRef 


// import React, {useRef } from "react";
// import "./css/form.module.css";
// import Button from "./UI/button";

// const Form = (props) => {
//   const userNameRef= useRef();
//   const ageRef= useRef();


//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(userNameRef);
//     const formSaved = {
//       username: userNameRef.current.value,
//       age: +ageRef.current.value,
//     };
//     props.onFormSubmitDataGet(formSaved);
//     userNameRef.current.value="";
//     ageRef.current.value="";
//   };
//   return (
//     <form onSubmit={onSubmitHandler}>
//       <label>{props.label1}</label>
//       <input
//         type="text"
//         ref={userNameRef}
//       />
//       <label>{props.label2}</label>
//       <input type="number" ref={ageRef} />
//       <Button type="Submit">Add User</Button>
//     </form>
//   );
// };

// export default Form;

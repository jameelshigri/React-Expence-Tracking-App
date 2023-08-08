import React from "react";
import "./NewExpance.css";
import ExpanceForm from "./ExpanceForm";
const NewExpance = (props) => {
  const saveExpanceDataHandler=(enteredData)=>{
    const expanceData={
      ...enteredData,
      id:Math.random().toString()
    }
    props.onNewExpanceAdd(expanceData);
  }
  return (
    <div className="new-expense">
      <ExpanceForm saveExpanceData={saveExpanceDataHandler} onhandle={props.onhandle} />
    </div>
  );
};

export default NewExpance;

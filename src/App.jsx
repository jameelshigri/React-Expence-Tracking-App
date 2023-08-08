import "./App.css";
import Expense from "./components/Expances/Expense";
import NewExpance from './components/NewExpance/NewExpance';
import { useState } from "react";
import NewExpanceToggler from "./components/NewExpance/NewExpanceToggler";
const DUMMY_EXPENCES = [
  { id:'e1',
    expanceDate: new Date ("2021-03-25"),
    expanceTitle: "Car Insurance",
    expanceAmount: 288.44,
  },
  { id:'e2',
    expanceDate: new Date ("2022-04-25"),
    expanceTitle: "Saloon",
    expanceAmount: 88.44,
  },
  { id:'e3',
    expanceDate: new Date ("2024-05-25"),
    expanceTitle: "Rentals",
    expanceAmount: 200,
  },
];
const App=()=> {
 const [expence,setExpence]=useState(DUMMY_EXPENCES);
 const [expenceBtn,setExpenceBtn]=useState(true);
 const newExpanceHandler=expen=>{
  //  console.log(expen);
 setExpence(prevExpence=>{
  return [expen,...prevExpence];
 })
 }
 const handleToggle=()=>{
  setExpenceBtn(!expenceBtn);
}
  return (
    <>
      {expenceBtn ? <NewExpanceToggler onhandle={handleToggle}/>
      : <NewExpance onNewExpanceAdd={newExpanceHandler} onhandle={handleToggle}/>
      }
      <Expense expence={expence} />
    </>
  );
}

export default App;

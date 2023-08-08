import React, { useState } from "react";
import "./ExpanceForm.css";
const ExpanceForm = (props) => {
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [Datee, setDate] = useState("");
  // const [user,setUser]=useState({
  //   title:'',
  //   amount:'',
  //   date:''
  // })

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const expanceData = {
      expanceTitle: Title,
      expanceAmount: Amount,
      expanceDate: new Date(Datee),
    };
    props.saveExpanceData(expanceData);
    setTitle("");
    setAmount("");
    setDate("");
    props.onhandle();
  };
  return (
   
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={Title} onChange={titleChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={Amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-01-01"
            value={Datee}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onhandle}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
          
  );
};

export default ExpanceForm;

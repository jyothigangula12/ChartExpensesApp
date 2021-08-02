import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*  
const [userInput , setUserInput] = useState({
   setEnteredTitle : '',
   setEnteredPrice : '',
   setEnteredDate : ''
}) */
console.log(props)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({ ...userInput, setEnteredTitle : 'event.target.value'})
    /*  setUserInput((prevState) => {
    return { ...prevState, setEnteredTitle : 'event.target.value'}})
    */
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    // setUserInput({ ...userInput, setEnteredPrice : 'event.target.value'})
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({ ...userInput, setEnteredDate : 'event.target.value'})
  };
 
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            value={enteredPrice}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" value = "cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" value="submit">
          AddExpense
        </button>
      </div>
    </form>
  );
};
export default NewExpenseForm;

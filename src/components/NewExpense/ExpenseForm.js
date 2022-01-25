import React, { useState } from "react";

import "./ExpenseForm.css";

//* User Input Expense Form
const ExpenseForm = (props) => {
  let c = console.log.bind();

  //! Below are the two ways we can use multiple states in this component

  // ! Individual segments (I think I like this way more)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // ! or as a whole
  //* All key value pairs have to be updated this way..
  // const [userInput, SetUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //* TITLE
  const titleChangeHandler = (event) => {
    // !for individual segments
    setEnteredTitle(event.target.value);
    // c(event.target.value);
    // ! as a whole
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value}
    // });
  };

  //* AMOUNT
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // c(event.target.value);
  };

  //* DATE
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // c(event.target.value);
  };

  //* SUBMIT
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
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
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2022"
          
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

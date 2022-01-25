import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

const filteredExpenses = props.items.filter( expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
      <ExpensesList items ={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

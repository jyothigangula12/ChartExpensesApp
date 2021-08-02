import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ChartExpenses from './ChartExpenses'
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
 
  const filterdExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
       <ChartExpenses expenses={filterdExpenses} />
      <ExpensesList filterdExpenses={filterdExpenses} />
    </Card>
  );
}
export default Expenses;

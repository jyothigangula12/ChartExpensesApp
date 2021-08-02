import React, { useState } from "react";
import "./NewExpenses.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpenses = (props) => {
  const [newForm, setNewForm] = useState(false);
  const saveExpensedataHandler = (expenseData) => {
    const NewExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpenses(NewExpenseData);
    setNewForm(false)
  };
 
  const addNewFormHandler = () => {
      setNewForm(true) 
  };
  const cancelFormHandler = () =>{
      setNewForm(false)
  }
  return (
    <div className="new-expense">
      {!newForm &&(<button
        className="new-expense button.alternative"
        onClick={addNewFormHandler}
      >
        {" "}
        Add New Expenses
      </button>)}
      {newForm &&( <NewExpenseForm
          onSaveExpenseData={saveExpensedataHandler} onCancel={cancelFormHandler}
        />)}
    </div>
  );
};
export default NewExpenses;

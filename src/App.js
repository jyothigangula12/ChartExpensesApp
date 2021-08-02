import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const Dummy_Expenses = [
  {
    id: "1",
    title: "Groceries",
    amount: 70.0,
    date: new Date(2020, 5, 7)
  },
  {
    id: "2",
    title: "Car Expenses",
    amount: 70.0,
    date: new Date(2022, 7, 8),
  },
  {
    id: "3",
    title: "Books",
    amount: 30.0,
    date: new Date(2020,1,4),
  },
  {
    id: "4",
    title: "Cloths",
    amount: 100.0,
    date: new Date(2019, 2,10),
  },
];
function App() {
  const[expenses , setExpenses ]= useState(Dummy_Expenses)

 
const addExpenseHandler = expense => {
 setExpenses((prevExpenses) => {
   return [expense, ...prevExpenses]
 })
} 

 //prevExpenses are previous Expenses here expenses variable 
  return (
    <div>
      <NewExpenses onSaveNewExpenses={addExpenseHandler}/>
      <Expenses expenses = {expenses}
      
      />
 

    </div>
  );
}

export default App;

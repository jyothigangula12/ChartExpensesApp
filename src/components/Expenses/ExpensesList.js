import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
function ExpensesList(props)
{
      if(props.filterdExpenses.length === 0) {
          return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
      }

         return(<ul className = 'expenses-list'>{ props.filterdExpenses.map(exp => (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />))}</ul>)
      
}
export default ExpensesList
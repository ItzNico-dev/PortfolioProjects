import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div className='expense-list'>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.text} <span>${expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

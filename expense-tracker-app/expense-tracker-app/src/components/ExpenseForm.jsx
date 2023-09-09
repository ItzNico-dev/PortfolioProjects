import React, { useState, useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const ExpenseForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      addExpense({ text, amount: +amount });
      setText('');
      setAmount('');
    }
  };

  return (
    <div className='expense-form'>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

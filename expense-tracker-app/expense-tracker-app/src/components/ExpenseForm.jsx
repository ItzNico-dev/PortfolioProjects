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
    <div className='expense-form p-4 bg-white rounded shadow'>
      <h2 className='text-xl font-bold mb-4'>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control mb-4'>
          <label
            htmlFor='text'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Text
          </label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
            required
          />
        </div>
        <div className='form-control mb-4'>
          <label
            htmlFor='amount'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Amount
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

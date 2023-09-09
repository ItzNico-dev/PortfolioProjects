import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import { ExpenseProvider } from './components/context/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <div className='App'>
        <h1>Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;

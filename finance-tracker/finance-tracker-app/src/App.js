import React from 'react';
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <h1>Finance Tracker</h1>
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;

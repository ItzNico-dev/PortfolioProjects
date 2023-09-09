import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';

const initialState = {
  expenses: [],
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Transaction History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
          >
            {transaction.text} <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

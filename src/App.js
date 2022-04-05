import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from './components/Expenses/Expense';

const App = () => {

  const dummyData = [
    {
      id: 'e1',
      title: 'Udemy React Course',
      amount: 550,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New House', amount: 340000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Coursera Python',
      amount: 4500,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: ' DELL Laptop',
      amount: 45000,
      date: new Date(2022, 5, 12),
    },
  ];
  const [expensesList, setExpenseList] = useState(dummyData);

  // getting the newExpense from from NewExpense component as a parameter while calling onExpenseData prop which is a function
  const expenseDataHandler = (newExpense) => {
    setExpenseList(prevSnapshot => [newExpense, ...prevSnapshot]);
  }

  return (
    <div>
      <NewExpense onExpenseData={expenseDataHandler} /> {/* passing function as prop here */}
      <Expense expenses={expensesList} />
    </div>
  );
}

export default App;

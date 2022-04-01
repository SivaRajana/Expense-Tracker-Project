import React from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from './components/Expenses/Expense';

const App = () => {
    
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // getting the newExpense from from NewExpense component as a parameter while calling onExpenseData prop which is a function
  const expenseDataHandler = (newExpense) => {
    console.log(newExpense);
  }
  
 return (
    <div>
      <NewExpense onExpenseData = {expenseDataHandler}/> {/* passing function as prop here */}
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;

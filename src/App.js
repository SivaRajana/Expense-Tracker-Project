import React,{useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from './components/Expenses/Expense';

const App = () => {
    
  const dummyData = [
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
  const [expensesList, setExpenseList] = useState(dummyData);

  // getting the newExpense from from NewExpense component as a parameter while calling onExpenseData prop which is a function
  const expenseDataHandler = (newExpense) => {
    setExpenseList(prevSnapshot => [newExpense,...prevSnapshot]);
  }
  
 return (
    <div>
      <NewExpense onExpenseData = {expenseDataHandler}/> {/* passing function as prop here */}
      <Expense expenses={expensesList}/>
    </div>
  );
}

export default App;

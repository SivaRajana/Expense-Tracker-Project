import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <Card className="expense-item-bg">
        <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
        <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
        <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}/>
        <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
      </Card>
    </div>
  );
}

export default App;

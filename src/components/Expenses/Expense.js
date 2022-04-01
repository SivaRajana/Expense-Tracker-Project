import React, {useState} from "react";
import ExpensesFilter from "./ExpeneFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {

    const expenses = props.expenses;
    const [filterYear, setFilterYear] = useState('2020');

    const expenseFilterHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expense-item-bg">
            <ExpensesFilter defaultYear={filterYear} onExpenseFilter={expenseFilterHandler}/>
            <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
            <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
            <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}/>
            <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
      </Card>
    )
}

export default Expense;
import React, { useState } from "react";
import ExpensesFilter from "./ExpeneFilter";
import Card from "../UI/Card";
import ExpenseItemList from "./ExpenseItemList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState('2022');

    const newExpenseList = props.expenses.filter(item => (item.date.getFullYear().toString() === filterYear));
    const expenseFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expense-item-bg">
            <ExpensesFilter defaultYear={filterYear} onExpenseFilter={expenseFilterHandler} />
            <ExpenseChart filterData={newExpenseList} />
            <ExpenseItemList items={newExpenseList} />
        </Card>
    )
}

export default Expense;
import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemLIst.css";

const ExpenseItemList = (props) => {
    if (props.items.length === 0){
        return <h1 className='expenses-list__fallback'>No Items Found</h1>
    }
    return (<ul className='expenses-list '>
        {props.items.map(item => <ExpenseItem key = {item.id} title={item.title} date={item.date} amount={item.amount}/>)}
    </ul>
    )
}

export default ExpenseItemList;
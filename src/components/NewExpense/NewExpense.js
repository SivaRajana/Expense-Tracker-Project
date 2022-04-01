import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {

    const newExpenseHandler = (newExpenseDataFromDataForm) => {

        const newExpenseData = {...newExpenseDataFromDataForm,
            id: Math.random().toString()
        }

        props.onExpenseData(newExpenseData);
    };


    return (
        <div className='new-expense'>
            <ExpenseFrom onNewExpense = {newExpenseHandler} /> 
            {/* Here passing function as prop to child component */}
        </div>
    )
}

export default NewExpense;
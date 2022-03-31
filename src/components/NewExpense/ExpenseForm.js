import React from 'react';
import './ExpenseForm.css'

const ExpenseFrom = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" placeholder="Add Title"/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" placeholder="Amount" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-01-01"/>
                </div>
            </div>
            <div>
                <button className='new-expense__actions'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom;
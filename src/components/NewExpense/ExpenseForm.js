import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseFrom = (props) => {

    const [titleInput, setTitleInput] = useState("");
    const [amountInput, setAmountInput] = useState("");
    const [dateInput, setDateInput] = useState("");

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const userInputData = {
            title: titleInput,
            amount: parseInt(amountInput),
            date: new Date(dateInput)
        }
        props.onNewExpense(userInputData); //Calling function which is defined in parent(new Expense)

        setTitleInput("");
        setAmountInput("");
        setDateInput("");
        setFullFormNeed(false); //after submitting form should shrink 
    }

    const [fullFormNeed, setFullFormNeed] = useState(false);

    const cancelHandler = () => {
        setFullFormNeed(false);
        setTitleInput("");
        setAmountInput("");
        setDateInput("");
    };

    const displayFullForm = () => setFullFormNeed(true);

    const fullForm = <div>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" placeholder="Add Title" value={titleInput} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" placeholder="Amount" min="0.01" step="0.01" value={amountInput} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={dateInput} onChange={dateChangeHandler} />
            </div>
        </div>
        <div>
            <button className='new-expense__actions' onClick={cancelHandler}>Cancel</button>
            <button className='new-expense__actions' type='submit'>Add Expense</button>
        </div>
    </div>

    const partialForm = <button className='new-expense__actions' onClick={displayFullForm}>Add Expense</button>

    return (
        <form onSubmit={onSubmitHandler}>
            {fullFormNeed === false && partialForm}
            {fullFormNeed && fullForm}
        </form>
    )
}

export default ExpenseFrom;
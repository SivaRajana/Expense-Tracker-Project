import React, {useState} from 'react';
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
            amount: amountInput,
            date: new Date(dateInput)
        }
        props.onNewExpense(userInputData); //Calling function which is defined in parent(new Expense)

        setTitleInput("");
        setAmountInput("");
        setDateInput("");
    }

    console.log(titleInput, dateInput, amountInput);
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" placeholder="Add Title" value={titleInput} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" placeholder="Amount" min="0.01" step="0.01" value={amountInput} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={dateInput} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div>
                <button className='new-expense__actions'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom;
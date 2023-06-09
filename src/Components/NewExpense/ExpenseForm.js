import React, { useState } from 'react';
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value}
        // })
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: e.target.value}
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: e.target.value}
        // })        
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        console.log(expenseData)
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'
                       onChange={titleChangeHandler}
                       value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                       min='0.01' 
                       step='0.01' 
                       onChange={amountChangeHandler}
                       value={enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                       min='2020-04-04' 
                       max='2024-12-31' 
                       onChange={dateChangeHandler}
                       value={enteredDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>CANCEL</button>
            <button type='submit'>ADD EXPENSE</button>
        </div>
    </form>
  )
}

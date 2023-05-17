import React from 'react';
import './NewExpense.css';
import { EpenseForm } from './EpenseForm';

export const NewExpense = (props) => {
    const saveExpenseDataHAndler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <EpenseForm onSaveExpenseData={saveExpenseDataHAndler}/>
    </div>
  )
}

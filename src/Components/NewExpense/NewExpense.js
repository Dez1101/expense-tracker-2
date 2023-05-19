import React, {useState} from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false)
    const saveExpenseDataHAndler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    const onEdittingHandler = () => {
      setIsEditting(true)
    }
  
    const stopEditingHandler = () => {
      setIsEditting(false);
    };
  return (
    <div className='new-expense'>
      {!isEditting && <button onClick={onEdittingHandler}>Add New Expense</button>}
      {isEditting && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHAndler}/>}
    </div>
  )
}

import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

export const ExpensesList = (props) => {
  
    if(props.items.length === 0)
        {
            return <h4 className='expenses-list__fallback'>No expenses available for this year</h4>
        }

  return (
    <ul className='expenses-list'>
        {
            props.items.map(item =>{
                return (
                    <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
                )
                })
        }
    </ul>
  )
}

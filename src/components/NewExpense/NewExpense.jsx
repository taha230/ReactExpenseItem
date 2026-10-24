import React from 'react'
import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm.jsx'

const NewExpense = (props) => {


    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };

        // console.log(expenseData);
        props.addExpense(expenseData);
    }

    return  (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData= { onSaveExpenseDataHandler } />
        </div>
    )
}

export default NewExpense;
import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'
const Expenses = ( {expenses} ) =>{


    return (
        <Card className='expenses'>
            {/* <ExpenseItem
            title = {expenses[0].title}
            amount = {expenses[0].amount}
            date = {expenses[0].date}
            />

            <ExpenseItem
            title = {expenses[1].title}
            amount = {expenses[1].amount}
            date = {expenses[1].date}
            />

            <ExpenseItem
            title = {expenses[2].title}
            amount = {expenses[2].amount}
            date = {expenses[2].date}
            /> */}

            {expenses.map( (expense)=> (

                <ExpenseItem
                  key={expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                />

            )
            )}
        
        </Card>
    )
}

export default Expenses;

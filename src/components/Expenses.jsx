import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'
const Expenses = () =>{


    const expenses = [
        {
        id : 'e1',
        title : 'Car Insurance',
        amount : 334.56,
        date : new Date (2022, 4, 14), 
        },
        {
        id : 'e2',
        title : 'House Rent',
        amount : 776.009,
        date : new Date (2024, 6, 16), 
        },
        {
        id : 'e3',
        title : 'Toilet Paper',
        amount : 55.66,
        date : new Date (2012, 6, 18), 
        }
    ]


    return (
        <Card className='expenses'>
            <ExpenseItem
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
            />
        
        </Card>
    )
}

export default Expenses;
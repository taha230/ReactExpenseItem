import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Expenses from './components/Expenses'
import React from 'react'
import NewExpense from'./components/NewExpense/NewExpense'



const DUMY_EXPENSES = [
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

function App() {

  const [expenses, setExpenses] = useState(DUMY_EXPENSES);
  const [count, setCount] = useState(0)

  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
    // setExpenses ([newExpense, ... expenses]);
    setExpenses((previousExpenses) => { return [newExpense, ...previousExpenses] });
    // setExpenses((previousExpenses) => [newExpense, ...previousExpenses]);
  }

  return (
    <>
      <NewExpense addExpense = {addExpenseHandler} />
      <Expenses expenses = {expenses} />
    </>
  );
}

export default App

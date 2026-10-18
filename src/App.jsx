import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Expenses from './components/Expenses'
import React from 'react'
import NewExpense from'./components/NewExpense/NewExpense'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewExpense />
      <Expenses />
    </>
  );
}

export default App

import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // use state with multiple variable input from user
    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : '',
    });

    const titleChangeHandler = (e) => {
        // console.log('title change handler called !!!');
        // console.log(e.target.value);
        setEnteredTitle(e.target.value);
    //     setUserInput({
    //         ...userInput, 
    //         enteredTitle: e.target.value
    // });

    // setUserInput(
    //     (prevState) => {
    //         return { ...prevState, enteredTitle: e.target.value};
    //     }
    // )

    //     console.log(userInput);

    }
    const amountChangeHandler = (e) => {
    //     setUserInput({
    //         ...userInput, 
    //         enteredAmount: e.target.value
    // });

    //     console.log(userInput);

        setEnteredAmount(e.target.value);


    }

    const dateChangeHandler = (e) => {
    //     setUserInput({
    //         ...userInput, 
    //         enteredDate: e.target.value
    // });
    //     console.log(userInput);

        setEnteredDate(e.target.value);
        console.log(enteredDate);


    }

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredexpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date (enteredDate )
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')

        // console.log(enteredexpenseData) ;
        props.onSaveExpenseData(enteredexpenseData);
    }

    return  (
       <form onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className= 'new-expense__control'>
                    <label> Title </label>
                    <input 
                        type= 'text' 
                        onChange={titleChangeHandler} 
                        value={enteredTitle} 
                    />

                </div>
                <div className= 'new-expense__control'>
                    <label> Amount </label>
                    <input 
                        type= 'number' 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler} 
                        value={enteredAmount} 
                    />
                </div>
                <div className= 'new-expense__control'>
                    <label> Date </label>
                    <input 
                        type= 'date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>

            <div className = 'new-expense__actions'>
                <button type = 'submit'> Add Expense </button>
            </div>

        </form>
    )
}

export default ExpenseForm;
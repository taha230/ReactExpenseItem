
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card'
import React , {useState} from 'react'; // useState is the famouse Hook

const ExpenseItem = (props) => {

    console.log('ExpenseItem component rendered !!!')
    
    // console.log('a')
    // console.log(props)
    const [title, setState] = useState(props.title);


    const clickHandler = () => {
        setState('New Title')

    }

    return (
    <div>
        
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />

            <div className= 'expense-item__description'>
                <h3> {title} </h3>
                <div className='expense-item__price'> {props.amount} </div>
            </div>
            <button onClick={ clickHandler }>Change</button>
        </Card>
    </div>
    )
}

export default ExpenseItem;
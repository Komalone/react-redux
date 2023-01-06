import React from 'react';

import './Expense.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from './Card';

function ExpenseItem(props){
   
    return ( 
        <Card className='expense-item'>
            <ExpenseDate date ={props.date} />
            <ExpenseDetail amount={props.amount} />           
        </Card>
    );
}
export default ExpenseItem;
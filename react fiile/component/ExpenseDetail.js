import React from 'react';

function ExpenseDetail(props){
    return (
        <div className='expense-item__descrption'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>Rs {props.amount}</div>
            </div>
    );
}

export default ExpenseDetail;
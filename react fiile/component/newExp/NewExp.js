import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpDataHandler= (enteredExpData)=>{
    const ExpData={
      ...enteredExpData,
      id: Math.random().toString()
    };
    props.onAddExp(ExpData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpDataHandler}/>
    </div>
  );
};

export default NewExpense;
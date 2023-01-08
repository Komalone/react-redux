import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses= (props) => {
  const [filteredYear, setFilteredYear]=useState('2020');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  const filteredExp= props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent= <p>No Expense found, Add Expense</p>

  if(filteredExp.length >0){
    expenseContent= filteredExp.map( (expense) => 
    <ExpenseItem 
    key={expense.id}
    title= {expense.title}
    amount = {expense.amount}
    date={expense.date}/>
    )}

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}/>
      {filteredExp.length === 0}
      {expenseContent}
    </Card>
    </div>
  );
}

export default Expenses;
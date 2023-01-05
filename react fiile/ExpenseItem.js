import './Expense.css';
function ExpenseItem(props){
    const expDate= new Date(2023,3,2);
    const expTitle='Car insurense';
    const expAmount=20500;
    return ( 
        <div className='expense-item'>
            <div>
                <div>Month</div>
                <div>Year</div>
                <div>Day</div>
            </div>
            <div className='expense-item__descrption'>
                <h3>{expTitle}</h3>
                <div className='expense-item__price'>Rs {expAmount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;
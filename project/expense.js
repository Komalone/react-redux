function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.number.value;
    const task= event.target.task.value;
    const cato=evet.target.plan.value;
    // localStorage.setItem('amount', amount);
    // localStorage.setItem('todo', task);
    // localStorage.setItem('category', cato);
    let myexpense={
        amount,
        task,
        cato
    }
    localStorage.setItem('myexpense', JSON.stringify(myexpense));
}
function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const task= event.target.task.value;
    const cato=evet.target.plan.value;
    // localStorage.setItem('amount', amount);
    // localStorage.setItem('todo', task);
    // localStorage.setItem('category', cato);
    let obj={
        amount,
        task,
        cato
    }
    localStorage.setItem('myexpense', JSON.stringify(obj));
    console.log(localStorage);
}
const submit=document.getElementById('submit');
document.addEventListener("DOMContentLoaded", () => {
    console.log('vscode')
})

function showExpense(){
    const li= document.createElement('li');
    const edit=document.createElement('button');
    const del=document.createElement('button');
    
    li.className='itemList';
    li.textContent=`${amount.value}-${task.value}-${plan.value}`;
    del.id=count;
    edit.id=count;
    
    del.onclick=deleteExp(del.id);
    edit.onclick=editExp(edit.id, amount.value, task.value, plan.value);
    console.log(del.id);
    edit.textContent="Edit Expense";
    del.textContent="Delete Expense";

    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);
    
    var obj1=[amount.value, task.value, plan.value]
    localStorage.setItem(count, obj1);
}

function deleteExp(id){
    const childnode= document.getElementById(id);
    ul.removeChild(childnode);
    localStorage.removeItem(id);
}

function editExp(id, amt, desc, cat){
    const childedit= document.getElementById(id);
    document.getElementById('amount').value=amt;
    document.getElementById('task').value=desc;
    document.getElementById('plan').value=cat;
    deleteExp(id);
}

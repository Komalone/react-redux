function saveToLocalStore(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    localStorage.getItem('name', name);
    localStorage.getItem('emailId', email);

    const obj={
        name, email
    }

    axios.post('https://crudcrud.com/api/3698407258c74894b968c134c7bd7363/appointmentdata')
    .then((respone) =>{
        showUseronScreen(respone,data)
        //console.log(respone)
    })
    .catch((error) =>{
        document.body.innerHTML = document.body.innerHTML + "<h1> Something is wrong<\h1>"
        console.log(error)
    })
    localStorage.setItem(obj,email, JSON.stringify(obj));
    showUseronScreen(obj)
}

window.addEventListener("DOMContentLoader", () =>{

    axios.get('https://crudcrud.com/api/3698407258c74894b968c134c7bd7363/appointmentdata')
        .then((response)=>{
        console.log(response)
        for(var i=0; i<response.data.length; i++){
        addNewLineElement(response.data[i])
        }
        })
        .catch((err)=>{
        console.log(err)
        })
    })

function showUseronScreen(user){

    document.getElementById('email').value='';
    document.getElementById('name').value='';
    //console.log(localStorage.getItem(user.emailId))

    if(localStorage.getItem(user.email)!=null){
        removeUserfromScrn(user.email)
    }
    const parentNode = document.getElementById('listOfPeople');
    const childHTML =`<li id=${user._id} > ${user.name} - ${user.email}
                        <button onclick = deleteUser('${user._id}')>Delete</button>
                        <button onclick = editUserDetails('${user._id}','${user.name}')></button>
                        </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
//EDIT USER

function editUserDetails(name, emailId){
    document.getElementById('name').value=name;
    document.getElementById('email').value=emailId;
    
    deleteUser(emailId);
}

//Delete user
 function deleteUser(userId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserfromScrn(emailId);
 }

 function removeUserfromScrn(emailId){
    const parentNode= document.getElementById('listOfPeople');
    const childNodetoDeleted= document.getElementById(emailId);
    if(childNodetoDeleted){
        parentNode.removeChild(childNodetoDeleted)
    }
 }
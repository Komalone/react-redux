//console.dir(document);
//console.log(document.URL);
//document.title= 112;
//console.log(document.title);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);

//GETELEMNTS
//console.log(document.getElementById('header-title')); //or we can
//var headerT=document.getElementById('header-title');
//var header= document.getElementById('main-header');
//console.log(headerT.textContent);
//headerT.textContent='Call';
//console.log(headerT.innerText);
//header.style.borderBottom= 'solid 4px #000';

//GETELBYCLASSNAME
/*var item=document.getElementsByClassName('list-group-item');
console.log(item[2]);
item[2].style.fontWeight='bold';
console.log(item);

for(var i=0; i<item.length; i++){
    item[i].style.backgroundColor='#f4f4f4';
}*/

//GETELEBYTAGNAME
//var tg=document.getElementsByTagName('li');
//console.log(tg[2]);
//tg[2].style.fontWeight='bold';
//console.log(tg);

//for(var i=0; i<tg.length; i++){
//   tg[i].style.backgroundColor='#f4f4f4';
//}

//QUERRYSELECTOR
//var header= document.querySelector('#main-header');
//header.style.borderBottom= 'solid 4px #a9a9a9';

//var input=document.querySelector('input');
//input.value= 'animal';
//for class 
//var item= document.querySelector('.list-group-item');  // for class name in selector put .
//item.style.color='yellow';
//var orItem= document.querySelector('.list-group-item:nth-child(3)');
//orItem.style.color='coral';
//var submit= document.querySelector('input[type="submit"]');
//submit.value='SEND'

/*var titles= document.querySelectorAll('.title');
console.log(titles);
titles[1].textContent= 'Hello';

var odd= document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor= '#f4f4f4';
}
var even= document.querySelectorAll('li:nth-child(even)');
for(var i=0; i< even.length; i++){
    even[i].style.backgroundColor= '#999';
}*/


//Traversing dom

//var itemList= document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#c8c8c8';

//itemList.parentElement.style.backgroundColor='#f8f8f8';
//console.log(itemList.parentElement);
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello';

//console.log(itemList.nextElementSibling);
//console.log(itemList.previousElementSibling);
/*
var newDiv= document.createElement('div');
newDiv.className='hello';
newDiv.id='hell';
newDiv.setAttribute('title', 'Hello Dv');

var newDivText= document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
var h1= document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);*/

var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter= document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();

    var newItem= document.getElementById('item').value;  //input value
    var li= document.createElement('li'); //new li element
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}



function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



function filterItem(e){
    var text= e.target.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');

    Array.form(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display= 'block';
        }else{
            item.style.display= 'none';
        }
    });
}
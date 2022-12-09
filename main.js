
// object in js
/*const car=['audi','swift','toy']
car.push('BMW')
car.unshift('MS')
car.pop()
console.log(car);
console.log(car.indexOf('audi'));*/

//constructor function
/*function Student(firstName, lastName, rollNum, sex, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollNum=rollNum;
    this.sex=sex;
    this.age=age;
    this.dob= new Date(dob);
    this.fullName= function(){
        return this.firstName+" "+this.lastName;
    };
    this.getBirth= function(){
        return this.dob.fullName();
    }
}
Student.prototype.findeligible= function findeligible(minAge){
    if(stu1.age > minAge){
        document.write(this.name +"is elligible <br/>");
    }
    else{
        console.log(this.name + "not eligible <br/>");
    }
}

//class
class Student{
    constructor(firstName, lastName, rollNum, sex, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.rollNum=rollNum;
    this.sex=sex;
    this.age=age;
    this.dob= new Date(dob);
    }
    fullName(){
        return this.firstName+" "+this.lastName;
    }
    getBirth(){
        return this.dob.fullName();
    }
    findeligible(minAge){
        if(stu1.age > minAge){
            document.write(this.name +"is elligible <br/>");
        }
        else{
            console.log(this.name + "not eligible <br/>");
        }
    }
}
//object
const stu1= new Student('Harry','Dom', '14', 'M', '12-5-1992');
const stu2= new Student('Carry','Stan', '10', 'F', '1-5-1993');

console.log(stu1.fullName());
console.log(stu1.getBirth());
console.log(stu2.fullName());
console.log(stu2.getBirth());
stu1.findeligible(15);
stu2.findeligible(15);*/
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));

const ul= document.querySelector('.item');
//ul.remove();
ul.firstElementChild.textContent= 'Hello'; //or
ul.children[1].innerText='Brad';
ul.children[0].style.background='green';
ul.children[1].style.background='yellow';
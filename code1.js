"use strict"

class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    static countUser(){
        console.log('there are 50 users');
    }
    register(){
        console.log(this.username+ ' is now new user');
    }
}

class Member extends Users{
    constructor(username, email, password, memberPack){
        super(username, email, password);
        this.package=memberPack;
        let todaysDate= new Date();
        const membershipactivetillyear= todaysDate.getFullYear();
        const membershipactivetillmonth= todaysDate.getMonth();
        const membershipactivetillday= todaysDate.getDay();

        this.membrshipactivetilldate= new Date{
            membershipactivetillyear,
            membershipactivetillmonth +1, //one month free ie extra month
            membershipactivetillday
        }
    }
    getPack(){
        console.log(this.username+' is subscribe to '+this.package)
    }
    renewMembership(){
        const membershipactivetillyear= this.membershipactivetillyear.getFullYear();
        const membershipactivetillmonth= this.membershipactivetillmonth.getMonth();
        const membershipactivetillday= this.membershipactivetillday.getDay();

        if(this.package=== 'Standard'){
        this.membrshipactivetilldate= new Date{
            membershipactivetillyear,
            membershipactivetillmonth +1, //one month free ie extra month
            membershipactivetillday
        }
        }else if(this.package=== 'Yearly'){
            this.membrshipactivetilldate= new Date {
                membershipactivetillyear+1,
                membershipactivetillmonth, 
                membershipactivetillday
            }
        }
    }
}
let mike= new Member('mike', 'mike23@gmail.com', '12345', 'Standard');
mike.getPack();
mike.renewMembership();

let yash= new Member('yash', 'yashu@gmail.com', '56789', 'Yearly');
yash.getPack();
yash.renewMembership();
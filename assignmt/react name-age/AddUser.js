import React from "react";
import Card from '../UI/Card';
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const AddUser=()=>{
    const addUserHandler=(event)=>{
        event.preDefault();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );

}

export default AddUser;
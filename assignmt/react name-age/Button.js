import React from "react";
import style from './Button.module.css'

const Button= (props)=>{
return (
    <Button
    className={style.Button}
    type={"button" || props.type}
    onClick={props.onClick}
    >
    {props.children}
    </Button>
);
};

export default Button;
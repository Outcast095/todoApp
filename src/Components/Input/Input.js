import React from 'react';
import style from "./Input.module.css"


function Input(props) {


    return (
        <div className={style.InputWrapper}>
            <input className={style.Input} type="text" onChange={event => {props.textChange(event.target.value)}} value={props.value}/>
        </div>

    );
}

export default Input;
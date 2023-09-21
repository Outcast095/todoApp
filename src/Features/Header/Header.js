import React from 'react';
import style from './Header.module.css'
import icon from "../../Public/assets/icons/enter.svg"
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Icon from "../../Components/Icon/Icon";

function Header(props) {
    return (
        <div className={style.Header}>
            <Input textChange={props.textChange} value={props.value}/>
            <Icon
                onClick={() => props.addTodo(props.todos, props.todoChange, props.value)}
                variant={"Ввод"}
                icon={icon}
                className={""}
            />
        </div>
    );
}

export default Header;

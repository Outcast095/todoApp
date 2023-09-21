import React from 'react';
import {useState} from 'react';
import style from "./TodosListItem.module.css"
import icon from "../../../Public/assets/icons/basket.svg"
import Icon from "../../../Components/Icon/Icon"
import Checkbox from "../../../Components/Checkbox/Checkbox"

function TodosListItem(props) {
    const [value, setValue] = useState(false)   /// состояние чекБокса

    const arr = [style.TodoText, style.TodoCross]

    console.log(style.TodoText)
    console.log(arr.join(" "))
    return (
        <li className={style.TodosListItem}>

            <Checkbox onChange={setValue} checked={value}/>

            <div className={value ? (arr.join(" ")) : (style.TodoText)}>
                {props.todos.text}
            </div>
            <Icon
                onClick={() => props.removeTodo(props.initialTodo, props.todoChange, props.todos.id)}
                variant={"basket"}
                icon={icon}
            />
        </li>
    );
}

export default TodosListItem;

// <Button buttonName={"удалить"} handler={() => props.removeTodo(props.initialTodo, props.todoChange, props.todos.id)}/>
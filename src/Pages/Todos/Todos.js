import React from 'react';
import Header from "../../Features/Header/Header";
import style from "./Todos.module.css"
import TodosList from "../../Features/TodoList/TodosList"

function Todos(props) {
    return (
        <div className={style.todos}>
            <Header
                textChange={props.textChange}
                addTodo={props.addTodo}
                value={props.value}
                todos={props.todo}
                todoChange={props.todoChange}/>
            <TodosList
                todos={props.todo}
                removeTodo={props.removeTodo}
                todoChange={props.todoChange}/>
        </div>
    );
}

export default Todos;
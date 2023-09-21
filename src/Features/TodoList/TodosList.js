import React from 'react';
import style from "./TodosList.module.css"
import TodosListItem from "./TodosListItem/TodosListItem"

function TodosList(props) {
    return (
        <ul className={style.TodoList}>
            {
                props.todos.map( item => {
                    return <TodosListItem
                        todos={item}
                        key={item.id}
                        removeTodo={props.removeTodo}
                        todoChange={props.todoChange}
                        initialTodo={props.todos}/>
                })
            }

        </ul>
    );
}

export default TodosList;

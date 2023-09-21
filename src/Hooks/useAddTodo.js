import {useState} from "react";

export default function useAddTodo(initialTodo) {

    const [todo, setTodo] = useState(initialTodo)

    function addTodoHandler(initialTodo, todoChange, todoText) {
        if (todoText != "") {
            todoChange([
                    ...initialTodo, {id: date, text: todoText}
                ]
            )
            setText("")
        } else return null

    }


    return [todo, removeTodoHandler]

}
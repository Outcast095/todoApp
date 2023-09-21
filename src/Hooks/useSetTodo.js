import {useState} from "react";

export default function useSetTodo(newTodo) {

    const [todo, setTodo2] = useState([
        {id: 1, text: "todos"},
        {id: 2, text: "newTodos"},
    ])

    setTodo2(newTodo)

    return [todo]

}
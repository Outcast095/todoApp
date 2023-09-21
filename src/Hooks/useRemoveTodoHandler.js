import {useState} from "react";

export default function useRemoveTodoHandler(initialTodo) {

    const [todo, setTodo] = useState(initialTodo)

    function removeTodoHandler(initial, todoIdRemove) {
        setTodo(initial.filter((item)=>{
            return item.id != todoIdRemove;
        }))
    }
    return [todo, removeTodoHandler]

}




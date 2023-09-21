import './App.css';
import Todos from "./Pages/Todos/Todos";

import {useState} from "react";


function App() {
    let date = new Date().toISOString()

    const [text, setText] = useState("")
    const [todo, setTodo] = useState(
        [

        ]
    )

    function addTodoHandler(initialTodo, todoChange, todoText) {
        if (todoText != "") {
            todoChange([
                    ...initialTodo, {id: date, text: todoText}
                ]
            )
            setText("")
        } else return null

    }

    function removeTodoHandler(initialTodo, todoChange, todoIdRemove) {
        todoChange(initialTodo.filter((item)=>{
            return item.id != todoIdRemove;
        }))
    }


  return (
    <div className="App">
        <Todos
            todo={todo}
            textChange={setText}
            todoChange={setTodo}
            value={text}
            addTodo={addTodoHandler}
            removeTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;

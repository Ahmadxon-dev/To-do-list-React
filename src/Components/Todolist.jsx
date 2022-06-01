import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";
import '../Styles/Style.css';
function Todolist(){

    const [todos, setTodos] = useState([]);


    const addtodo = todo =>{
        setTodos([...todos, todo]);
        if(!todo.text ||  /^\s*$/.test(todo.text)){
            return 
        }
        
        const newtodos = [todo, ...todos];
        setTodos(newtodos);
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    
      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };
    
      const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    return (
        <div className="wrapper">
            <div className="minor-wrapper">
                <div className="maintodoform">
            <Todoform onSubmit={addtodo}/>
            </div>
            <div className="maintodo">
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            </div>
            </div>
        </div>
    );
}
export default Todolist;
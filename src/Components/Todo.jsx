import React, {useState} from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }){

    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
    
      const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
      if (edit.id) {
        return <Todoform edit={edit} onSubmit={submitUpdate} />;
      }
    
    return todos.map((todo, index) => (
        <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <i
          onClick={() => removeTodo(todo.id)}
          className='delete-icon fa-solid fa-x'></i>
        <i
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon fa-solid fa-pencil'></i>


{/* <i class="fa-solid fa-xmark-large"></i>
<i class="fa-solid fa-pencil"></i> */}
      </div>
    </div>
    ))
}

export default Todo;
import './App.css';
import { useState } from 'react';
import TableList from './Components/TableList';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, language: 'JavaScript', stack: 'React' },
    { id: 2, language: 'Python', stack: 'FullStack' },
    { id: 3, language: 'JavaScript', stack: 'ExpressJS' },
    { id: 4, language: 'JavaScript', stack: 'MongoDB' }
  ])

  const [title, setTitle] = useState('')
  const [stack, setStack] = useState('')
  const addpost = (e) => {
    e.preventDefault()
    const newpost={
      id: posts.length + 1,
      language: title,
      stack: stack
    }
    setPosts([...posts, newpost])
    setTitle('')
    setStack('')
  }

  return (
    <div className='mx-auto app'>
      <form >
        <h4 className='text-center'>Lorem, ipsum dolor sit </h4>
        <input type="text"
         className='form-control '
         placeholder='enter language'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         />
         <input type="text"
         className='form-control my-3'
         placeholder='enter stack'
         value={stack}
         onChange={(e) => setStack(e.target.value)}

         />
         <button onClick={addpost} className='btn btn-success w-100'>Add post</button>
      </form>
      <TableList posts_bu_obyekt={posts}/>  
    </div>
  );
}

export default App;

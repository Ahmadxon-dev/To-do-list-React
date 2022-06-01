import React, {useState, useRef, useEffect} from "react";

function Todoform(props){

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
    }

    return (
        <div className="">
            <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>
                    Update
                </button>
                </>
            ) : (
                <>
                <input
                    placeholder='Add a todo'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                />
                <button onClick={handleSubmit} className='todo-button btn-success'>
                    Add todo
                </button>
                </>
            )}
            </form>
        </div>

    );
}

export default Todoform;
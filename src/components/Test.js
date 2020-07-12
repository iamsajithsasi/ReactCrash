import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'addTodo':
            return {
                todos: [...state.todos, {text: action.inputText, completed: false}]
            }
        default:
            break;
    }
}

export default function Test() {
    const [inputText, setInputText] = useState('')
    const [todoLists, dispatch] = useReducer(reducer, { todos: [] })

    const todoList = [
        {
            text: 'Todo 1',
            completed: false
        },
        {
            text: 'Todo 2',
            completed: false
        }
    ]
    function submitForm(e) {
        e.preventDefault();
        dispatch({type: 'addTodo', inputText})
        setInputText('')
    }
    return (
        <div>
            <hr />
            <form onSubmit={(e) => submitForm(e)}>
                <input
                    type="text"
                    placeholder="Your tasks.." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </form>
            <ul>
                {
                    todoList.map((val, index) => (
                        <li key={index} >{val.text}</li>
                    ))
                }
            </ul>
            <pre>
                {JSON.stringify(todoLists, null, 2)}
            </pre>
        </div>
    )
}

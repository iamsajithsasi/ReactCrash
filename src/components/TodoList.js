import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "addTodo":
            return {
                todos: [...state.todos, { text: action.payload, completed: false }]
            };
        case "todoCompleted":
            return {
                todos: state.todos.map((val, idx) =>
                    idx === action.payload ? { ...val, completed: !val.completed } : val
                )
            };
        default:
            console.log(state)
            break;
    }
}

export default function TodoList() {

    // structure of the array
    // {
    //     todos: [
    //         {
    //             text: "Some text",
    //             completed: false
    //         },
    //         {
    //             text: "Some other text",
    //             completed: false
    //         }
    //     ]
    // }

    const [inputTxt, setInputTxt] = useState("")

    const [{ todos }, dispatch] = useReducer(reducer, { todos: [] })
    return (
        <div>
            <h3>ToDo Tasks</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: 'addTodo', payload: inputTxt })
                    setInputTxt('')
                }}
            >
                <input type="text" value={inputTxt} placeholder="Type your todos..." onChange={e => setInputTxt(e.target.value)} />
            </form>
            {/* <pre>
                {JSON.stringify(todos, null, 2)}
            </pre> */}
            <ul>
                {
                    todos.map((val, index) => (
                        <li
                            key={index}
                            onClick={() => dispatch({ type: 'todoCompleted', payload: index })}
                            style={{ textDecoration: val.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                        >
                            {val.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

import React, { useReducer } from 'react'

function reducer(value, action) {
    switch (action.type) {
        case "increment":
            return value - 1
        case "decrement":
            return  value + 1
        default:
            return value;
    }
}

export default function Usingreducer() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <p>Using reducer</p>
            <p>{count}</p>
            <button onClick={() => dispatch({type:"increment"})}>Increment</button>
            <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}

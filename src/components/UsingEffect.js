import React, { useEffect, useState, useRef } from 'react'

export default function UsingEffect() {
    
    const [state, setState] = useState({ data: null, loading: true })
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")))
    const url = `http://numbersapi.com/${count}`;

    useEffect(() => {
        fetch(url).then(info => info.text()).then(infotext => setState({data: infotext, loading: false}))
    }, [url]);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
        // console.log(dataref.current)
    }, [count]);

    const dataref = useRef();

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Next</button><br />
            <p ref={dataref} >{state.data}</p>
        </div>
    )
}

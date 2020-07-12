import React, { useLayoutEffect, useRef, useState } from 'react'

export default function UsingLayout() {

    var [state, setstate] = useState([])

    useLayoutEffect(() => {
        let x = divBox.current.getBoundingClientRect()
        setstate((c) => c = JSON.stringify(x));
    }, [state])
    const divBox = useRef()
    return (
        <>
            <div ref={divBox}>
                Same as use effect but after all dom mutation
            </div>
            <p>{state}</p>
        </>
    )
}

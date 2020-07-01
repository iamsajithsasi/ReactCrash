import React, { useLayoutEffect, useRef } from 'react'

export default function UsingLayout() {
    useLayoutEffect(() => {
        console.log(divBox.current.getBoundingClientRect())
    }, [])
    const divBox = useRef()
    return (
        <div ref={divBox}>
            Same as use effect but after all dom mutation
        </div>
    )
}

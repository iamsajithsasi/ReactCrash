import React from 'react'

export default function IncrementingOutside({callIncrementFn}) {
    return (
        <div>
            <button onClick={callIncrementFn}>Click to inc</button>
        </div>
    )
}

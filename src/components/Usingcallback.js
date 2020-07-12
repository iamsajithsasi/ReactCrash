import React, { useMemo, useCallback } from 'react'

export default function Usingcallback() {

    const toUpdateWords = useCallback(() => {

        console.log('Use call back function now works')
        
        return 'Hello World';
    }, [])

    const toUpdateWordsFn = useMemo(() => toUpdateWords(), [toUpdateWords])
    
    return (
        <div>
            {/* <button onClick={() => toUpdateWordsFn}>Splice</button> */}
            <p>{toUpdateWordsFn}</p>
        </div>
    )
}

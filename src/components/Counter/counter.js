import React, {memo} from 'react'

function Counter({count, handleCounter}) {
    console.log('counter is randring');
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCounter}>Increment</button>
    </div>
  )
}

export default memo(Counter)
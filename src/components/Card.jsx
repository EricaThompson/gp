//built with rafce shortcut

import React, { useState } from 'react'


const Card = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          ...
        </p>
      </div>
  )
}

export default Card
//built with rafce shortcut

import React, { useState } from 'react'


const Card = () => {
  const [heartCount, setHeartCount] = useState(0)

  return (
    <div className="card">
        <div className="reaction" onClick={() => setHeartCount((count) => count + 1)}>
        💜 {heartCount}
        </div>
        <p>
          ...
        </p>
      </div>
  )
}

export default Card
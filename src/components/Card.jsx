//built with rafce shortcut

import React, { useState } from 'react'


const Card = () => {
  const [heartCount, setHeartCount] = useState(0)
  const [rocketCount, setRocketCount] = useState(0)


  return (
    <div className="card">
        <div 
            className="reaction" 
            >
            <span onClick={
                () => setRocketCount((count) => count + 1)}>
                🚀 {rocketCount}
            </span>
            <span onClick={
                () => setHeartCount((count) => count + 1)}>
                💜 {heartCount}
            </span>
        </div>
        <p>
          Something important
        </p>
      </div>
  )
}

export default Card
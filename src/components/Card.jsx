//built with rafce shortcut

import React, { useState } from 'react'


const Card = ({data}) => {
  const [heartCount, setHeartCount] = useState(data.likes)
  const [rocketCount, setRocketCount] = useState(data.rockets)
  const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
  // console.log(data.key)
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
          {data.post}
        </p>
        <p>{data.user}</p>
        <p>{months[data.date.getMonth()]} {data.date.getDate()}, {data.date.getFullYear()}</p>

      </div>
  )
}

export default Card
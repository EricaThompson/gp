//built with rafce shortcut

import React, { useState } from 'react'


const Card = ({data}) => {
  const [heartCount, setHeartCount] = useState(data.likes)
  const [rocketCount, setRocketCount] = useState(data.rockets)
  const [hide, setHide] = useState([data.hidden, "show"])
  const [pin, setPin] = useState(data.pin)
  // let hide = false;

  const handleHide = () => {
    hide[0] ? setHide([false, "show"]) : setHide([true, "hide"])
  };

  const handlePin = () => {
    pin ? setPin(false) : setPin(true)
  };

  // const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
  // console.log("card console: ", hide)
  return (
    <div className={"card click " + hide[1]}>
        <div className='topics'>
          topic: {data.topics.map((topic, i)=>(<span key={i} className='topic'>{topic}</span>))}
        </div>
        <div 
            className="reaction" 
            >
            <span onClick={
                () => setRocketCount((count) => count + 1)}>🚀 {rocketCount}</span>
            <span onClick={
                () => setHeartCount((count) => count + 1)}>💜 {heartCount}
            </span>
            <span onClick={
                  () => handlePin()}>
                  {pin ? "📍" : "📌"}
              </span>
        </div>
        <div className={hide[0] ? "data-hidden" : ""}>
          <p className={"post" + hide[0] ? "post-hidden" : ""}>
            {data.post}
          </p>
          <div >
            <img className='card-user-img' src={data.img} alt="avatar" />
          </div>
          <p className='user'>{data.user}</p>
          {/* <p>{months[data.date.getMonth()]} {data.date.getDate()}, {data.date.getFullYear()}</p> */}
          <div className='hider'>
            <span onClick={
                  () => handleHide()}>
                  {hide[0] ? "+" : "-"}
              </span>
          </div>
        </div>
      </div>
  )
}

export default Card
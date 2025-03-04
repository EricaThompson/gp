import React from 'react'
import Card from './Card'
import UserActions from './UserActions'

const CardHolder = ({data}) => {

  return (
    <div className='card-holder'>
        {data.map((data, i) => {
            return <div key={i}><Card data={data} /></div>
        })}
        <UserActions />
    </div>
  )
}

export default CardHolder
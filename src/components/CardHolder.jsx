import React from 'react'
import Card from './Card'

const CardHolder = ({data}) => {

  return (
    <div>
        {data.map((data) => {
            return <Card data={data} />
        })}
    </div>
  )
}

export default CardHolder
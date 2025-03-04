import React from 'react'
import Card from './Card'

const CardHolder = ({data}) => {

  return (
    <>
        {data.map((data, i) => {
            return <Card data={data} key={i} />
        })}
    </>
  )
}

export default CardHolder
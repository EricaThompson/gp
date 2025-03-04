import React from 'react'
import Card from './Card'

const CardHolder = ({data}) => {

  return (
    <>
        {data.map((data, i) => {
            return <div key={i}><Card data={data} /></div>
        })}
    </>
  )
}

export default CardHolder
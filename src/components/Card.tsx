import React from 'react'

interface ICard {
    width: string,
    heigth: string;
}

const Card:React.FC<ICard>=({width,heigth}) =>{
  return (
    <div>
        {width}
        {heigth}
    </div>
  )
}

export default Card
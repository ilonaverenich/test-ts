import {FC,ReactElement} from 'react'

interface ICard {
    width: string,
    heigth: string;



}

const Card:FC<ICard>=({width,heigth}) =>{
  return (
    <div>
        {width}
        {heigth}
    </div>
  )
}

export default Card
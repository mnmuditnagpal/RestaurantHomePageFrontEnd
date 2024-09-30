import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,description,image,price}) => {

    const[itemCount,setItemCount] = useState(0)

  return (
    <div className='food-items'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image"/>
            {!itemCount
              ?<img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" className='add'/>
              :<div className='item-counter'>
                  <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                  {itemCount}
                  <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                </div>}    
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" className="item-rating" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem

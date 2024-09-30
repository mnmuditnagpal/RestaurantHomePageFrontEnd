import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Indulge in a culinary journey with our extensive menu filled with
        mouthwatering dishes. Our mission is to satisfy your cravings and
        tantalize your taste buds with delicious flavors and exquisite
        ingredients
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className="menu-list-items">
                    <img className={item.menu_name===category?"active":""} src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
               </div>
            )
        })}
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;

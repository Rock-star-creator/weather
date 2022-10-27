import React, { useState } from "react";
import './style.css'
import Menu from "./menuapi";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";

const unique_menu = [...new Set(Menu.map((menu_list)=>{
  return menu_list.category
})),"All",]

const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu)
  const [unique_list,setunique_list] = useState(unique_menu)

  const filterItem = (category1) => {
    if(category1 === "All"){
      setMenuData(Menu)
      return
    }
     const update_list = Menu.filter((cur_ele)=>{
      return(cur_ele.category === category1)

     })
     setMenuData(update_list)
  };
  return (
     <>
     <Navbar filterItem = {filterItem} unique_list = {unique_list} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;

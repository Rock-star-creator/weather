import React from 'react'

const Navbar = ({filterItem,unique_list}) => {
  return (
    <>
      <nav className="navbar">
      <div className="btn-group">
        {unique_list.map((unique_list_to_display)=>{
            return(<button className="btn-group__item" onClick={() => filterItem(unique_list_to_display)}>{unique_list_to_display}</button>)
        })}
        {/* :(
        <button className="btn-group__item" onClick={() => filterItem("Breakfast")}>BreakFast</button>
        <button className="btn-group__item" onClick={() => filterItem("Lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={() => filterItem("Evening")}>Evening</button>
        <button className="btn-group__item" onClick={() => filterItem("Dinner")}>Dinner</button>
        ): */}
        {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
      </div>

     </nav>
    </>
  )
}

export default Navbar

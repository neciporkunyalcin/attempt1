import React from 'react'
import photo4 from '../assets/photo4.jpg'
import { MenuList } from '../helper/MenuList'

function Menu() {
  return (
    <div className='menu'style={{backgroundImage:`url(${photo4})`}}>
        <h1 className='menuTitle'>CARS LİST</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key)=>{
                return <div className='menuItem'>
                    <div> <img src={menuItem.image} alt={menuItem.name}/></div>
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.price} TL</p>
                </div>
            })}

        </div>
      
    </div>
  )
}

export default Menu

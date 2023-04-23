import React from 'react';
import { useState } from 'react'
import './ItemDropDown.css'

function ItemDropDown({ title, colors, description, images }) {
  
  const [dropState, setDropState] = useState(false)

  return (
    <div className={dropState? 'item-drop-down-open' : 'item-drop-down'}>
      <div className={dropState? 'item-drop-down-body-open' : 'item-drop-down-body'}>
        <h1>{title}</h1>
        <div className='item-drop-down-colors'>
            {colors.map((color) => {
                return <div key={color} style={{ backgroundColor: color, width: 80, height: 8, marginRight: 5 }}></div>;
            })}
        </div>
        <h3 className='item-drop-down-description'>{description}</h3>
        {dropState ? 
            images.map((image) => {
                return <img src={image} className='drop-down-image fade-in-image'/>
            })
            : <></>
        }
      </div>
      <button className='item-drop-down-button mock-up-hover' onClick={() => setDropState(!dropState)}>{dropState ? "Hide Mock-Up" : "View Mock-Up"}</button>
    </div>
  );
}

export default ItemDropDown;
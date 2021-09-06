import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../Shop/Shop.css'

const Shop = (props) => {
    console.log(props)

    const { age, img, name, role, salary } = props.player

    return (
        

            <div className='player-container'>
                <img style={{ height: "150px" }} src={img} alt="" />
                <h1> {name}</h1>
                <p>Age: {age}</p>
                <p>{role}</p>
                <p>{salary}</p>
                <button ><FontAwesomeIcon icon= {faUserPlus} />  Add this player</button>
            </div>

         
    );
};

export default Shop;
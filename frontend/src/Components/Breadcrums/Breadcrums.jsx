import React from 'react'
import './breadcrum.css'
import arroe_icon from '../../Images/breadcrum_arrow.png'
const Breadcrums = ({ product }) => {
    return (
        <div className='breadcrum'>
            Home <img src={arroe_icon} alt="" /> SHOP <img src={arroe_icon} alt="" /> {product.category} <img src={arroe_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrums


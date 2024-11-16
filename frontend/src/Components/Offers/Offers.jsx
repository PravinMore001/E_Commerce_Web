import React from 'react'
import style from './offers.module.css'
import exclusive_image from '../../Images/exclusive_image.png'
function Offers() {
    return (
        <div className={style.offers}>
            <div className={style.offers_left}>
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Only on best sellers Product</p>
                <button>Check now</button>
            </div>
            <div className={style.offers_right}>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers

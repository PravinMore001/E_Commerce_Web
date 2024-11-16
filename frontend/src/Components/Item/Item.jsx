import React from 'react'
import style from './Item.module.css'
import { Link } from 'react-router-dom'
function Item(props) {
    return (
        <div className={style.item}>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className={style.prices}>
                <div className={style.newprice}>
                    <p>${props.new_price}</p>
                </div>
                <div className={style.oldprice}>
                    <p>${props.old_price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item

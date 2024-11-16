import React from 'react'
import style from './Popular.module.css'
import data_product from '../../Images/data.js'
import Item from '../Item/Item'
function Popular() {
    return (
        <div className={style.popular}>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className={style.popular_item}>
                {
                    data_product.map((i, index) => (
                        <Item key={index} id={i.id} name={i.name} image={i.image} new_price={i.new_price} old_price={i.old_price} />
                    ))
                }
            </div>
        </div>
    )
}

export default Popular

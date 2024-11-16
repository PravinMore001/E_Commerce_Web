import React from 'react'
import './reletedproducts.css'
import data_product from '../../Images/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {
                    data_product.map((i, index) => (
                        <Item key={index} id={i.id} name={i.name} image={i.image} new_price={i.new_price} old_price={i.old_price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts

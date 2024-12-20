import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Images/dropdown_icon.png'
import Item from '../Components/Item/Item'
function ShopCategory(props) {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>Showing 1-12</span> out of 36 products</p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map((i, index) => {
                        if (props.category === i.category) {
                            return <Item key={index} id={i.id} name={i.name} image={i.image} new_price={i.new_price} old_price={i.old_price} />
                        }
                        else {
                            return null
                        }
                    })
                }
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>

    )
}

export default ShopCategory

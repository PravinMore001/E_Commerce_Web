import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Images/cart_cross_icon.png'
const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((i) => {
                    if (cartItem[i.id] > 0) {
                        return (
                            <div>
                                <div className="cartitem-format cartitem-format-main">
                                    <img className='carticon-product-icon' src={i.image} alt="" />
                                    <p>{i.name}</p>
                                    <p>${i.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItem[i.id]}</button>
                                    <p>${i.new_price * cartItem[i.id]}</p>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(i.id) }} alt="" />
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    return null;
                })
            }
            <div className='cart-items-down'>
                <div className="cart-items-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If You Have Promo code Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' name="" id="" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems

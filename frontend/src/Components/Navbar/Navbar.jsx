import React, { useContext } from 'react'
import style from './Navbar.module.css'
import logo from '../../Images/logo.png'
import cart_icon from '../../Images/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
function Navbar() {
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className={style.navbar}>
            <div className={style.navlogo}>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className={style.menu}>
                <div><Link to='/'>SHOP</Link></div>
                <div><Link to='/mens'>MEN</Link></div>
                <div><Link to='/womens'>WOMEN</Link></div>
                <div><Link to='/kids'>KIDS</Link></div>
            </div>
            <div className={style.logincart}>
                <button><Link to={'/login'}>LOGIN</Link></button>
                <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className={style.cartcount}>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import './footer.css'
import footer_logo from '../../Images/logo_big.png'
import instagram_icon from '../../Images/instagram_icon.png'
import pintester_icon from '../../Images/pintester_icon.png'
import whatsapp_icon from '../../Images/whatsapp_icon.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 - All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer
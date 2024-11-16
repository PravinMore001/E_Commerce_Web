import React from 'react'
import style from './Hero.module.css'
import hand_icon from '../../Images/hand_icon.png'
import arrow from '../../Images/arrow.png'
import hero_image from '../../Images/hero_image.png'
function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.hero_left}>
                <div className={style.p1}>
                    <p>NEW ARRIVALS ONLY</p>
                </div>
                <div className={style.p2}>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <div className={style.p3}>
                    <p>collections</p>
                </div>
                <div className={style.p4}>
                    <p>for everyone</p>
                </div>
                <div className={style.btn}>
                    <button>Latest Collection <img src={arrow} alt="" /></button>
                </div>
            </div>
            <div className={style.hero_right}>
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}
export default Hero

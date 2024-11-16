import React from 'react'
import './CSS/loginsignup.css'
function LoginSignup() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='enter your name' />
                    <input type="email" name="" id="" placeholder='enter email' />
                    <input type="password" name="" id="" placeholder='enter password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an Acount <span>Login here ...</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing , I agree to terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup

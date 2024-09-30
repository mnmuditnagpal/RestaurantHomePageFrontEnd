import React, { useState } from 'react'
import './LoginSignupForm.css'
import { assets } from '../../assets/assets';

const LoginSignupForm = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login");

  return (
    <div className='login-signup-form-container'>
        <form className="login-signup-popup">
            <div className="login-signup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-signup-inputs">
                {
                    currState === "Login"?
                    <></>
                    :<input type="text" placeholder='Your Name' required/>
                }
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Password' required/>
            </div>
            <button>{currState === "Login"?"Login":"Create Account"}</button>
            { currState === "Login"?<></>
              :<div className="signup-condition">
                <input type="checkbox" required/>
                <p>By continuing. I Agree the Terms & Conditions.</p>
             </div>
            }
            {
                currState === "Login"?
                <p className='login-signup-switch'>Create a new account.<span onClick={()=>setCurrState("SignUp")}> Click Here</span></p>
                :<p className='login-signup-switch'>Already, have an account?<span onClick={()=>setCurrState("Login")}> Login Here</span></p>
            }
        </form>
    </div>
  )
}
export default LoginSignupForm

import React from 'react'
import "./login.css"


export default function Login() {
    return (
        <div className='login'>
            <form action="" className="loginForm">
                <h1>Member Login</h1>
                <button className='signInGoogle '>
                    <i className='googlelogo' ></i>
                    <a>Sign In With Google</a>
                
                </button>
                 <label ><span>*</span>Email Address</label>
                <input className='logininput' type="text" name="" id="" placeholder='name@yoursite.com' />
               <label ><span>*</span>Password</label>
                 <input className='logininput' type="text" name="" id="" placeholder='Enter Password' />
                 <div className='forgetpass'>
                     <p>Forget Your Password? <a>Click Here</a></p>
                 </div>
                <button className='loginButton'>Login Now</button>
                <div className="lastbuttons">
                <button className='leftlastbutton'><a href='#' title='Sign In With Google'> Want to join our network of trainers, teachers and studios? Apply today!</a></button>
                <button className='rightlastbutton'> <a href='#' title='Sign In With Google'>Not a Member? View our blog and sign up to our newsletter here here</a></button>  </div>
            </form>
            
        </div>
    )
}

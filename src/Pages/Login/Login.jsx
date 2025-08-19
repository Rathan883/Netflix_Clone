import React, { useState } from 'react'
import './Login.css'
import Logo from "../../assets/logo.jpg" 
import {login, signup} from "../../Firebase"
import giphy from "../../assets/giphy.gif" 



const Login = () => {

    const[signState, setSignState]  = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const user_auth = async (event) => {
        event.preventDefault();
        setLoading(true);
     if(signState==="Sign In"){
        await login( email, password);
     }
            else{
        await signup(name, email, password);

            }
            setLoading(false);
     }   
     

  return (
    loading?<div className="login-spinner">
        <img src={giphy} alt="" />
    </div>:
    <div className='Login'>
        <img src={Logo} className="login-logo" alt="" />
        <div className="login-form">
            <h1>{signState}</h1>
            <form>  
                {signState==="Sign Up"? <input value ={name} onChange={(e) => {setName(e.target.value)}}  type="text"placeholder='Your name'/>:<></>}
                    <input  value ={email} onChange={(e) => { setEmail(e.target.value)}}  type="email"placeholder='Your Email' />
                    <input  value ={password} onChange={(e) => {setPassword(e.target.value)}}  type="password"placeholder='password' />
                    <button onClick={user_auth} type ="button">{signState}</button>
                    <div className="Form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                            <p>Need Help?</p>
                        </div>
                        
                    
                    
            </form>
            <div className="Form-switch">
                {signState==="Sign In"?<p>New to netflix?<span onClick = {() => {setSignState("Sign Up")}}>Sign Up Now</span></p>:
                <p>Already have an account?<span onClick = {() => {setSignState("Sign In")}}>Sign In Now</span></p>}
            </div>

        </div>
    </div>
    
  )

}


export default Login
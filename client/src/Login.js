import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from './assets/signlogo.png'
import img2 from './assets/bg1.avif'
import './Login.css'
import Axios from 'axios'

const Login = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const login = ()=>{
    Axios.post("/login",{email,password})
    .then((result)=>{
      if(result.data === 'success'){
        alert('welcome user')
        navigate("/home")
      }else
      {
        console.log("login failed")
      }
    })
  }


  return (
   <>
<div className='back1'>
<img  src={img2} className='img2'></img>
</div>
 <div className='form1'>
    <img src={img1} className='img1'></img>
    <h1 className='h1'>Login</h1>
    <br></br>
    <br></br>
    <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <br></br>
    <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
    <br></br>
    <br></br>
    <button onClick={login}>Login</button>
    <br></br>
    <br></br>
    <p>Don't have an account yet : <Link to='/' className='logbtn'>Signup</Link> </p> 
    </div>
   </>
  )
}

export default Login

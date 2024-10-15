import React, { useState } from 'react'
import img1 from './assets/signlogo.png'
import img2 from './assets/bg1.avif'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './Signup.css'

const Signup = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const signup = ()=>{
Axios.post("/createuser",{
  name:name,
  email:email,
  password:password,
  
}).then(()=>{
alert("Signup Successfull Welcome users")
navigate("/home")

}).catch((err)=>{
  console.log(err)
})
}
  

  return (
   <>
   <img  src={img2} className='img2'></img>
    <div className='form1'>
    <img src={img1} className='img1'></img>
    <h1>Signup</h1>
    <br></br>
    <input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
    <br></br>
    <br></br>
    <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <br></br>
    <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
    <br></br>
    <br></br>
    <button onClick={signup}>Signup</button>
    <br></br>
    <br></br>
    <p>Already have an account? : <Link to='/login' className='logbtn'>Login</Link> </p> 
    </div>
   </>
  )
}

export default Signup

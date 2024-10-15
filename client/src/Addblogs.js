import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import './Addblogs.css'

const Addblogs = () => {

    


 const[title,settitle] = useState("");
 const[image,setimage] = useState("");
 const[content,setcontent] = useState("");
 const[tags,setags] = useState("");

    const sub = ()=>{
        Axios.post("/createblogs",{
            title:title,
            image:image,
            content:content,
            tags:tags
            
        }).then(()=>{
            alert("Blog uploaded successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
   <>
    <div className='form24'>
   <h1>Blog Data</h1>
    <br></br>
  <input placeholder='Enter the title here' onChange={(e)=>{settitle(e.target.value)}}></input>
  
  <br></br>
  
  <input placeholder='Enter the image here' onChange={(e)=>{setimage(e.target.value)}}></input>
  <br></br>
 
  <input placeholder='Enter the content here' onChange={(e)=>{setcontent(e.target.value)}}></input>
  <br></br>
  <input placeholder='Enter the tags here' onChange={(e)=>{setags(e.target.value)}}></input>
  <br></br>
  <button onClick={sub}>Submit data</button>
  </div>
   </>
  )
}

export default Addblogs

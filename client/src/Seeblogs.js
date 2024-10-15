import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import './Seeblogs.css'


const Seeblogs = () => {

    const[users,setusers] = useState([]);
    const {id} = useParams();
   

useEffect(()=>{
    Axios.get("/sblog/"+id)
    .then((res)=>{
        setusers(res.data)
    })
},[])

  return (
  <>
  <img src={users.image} className='bimg'></img>
  <div className='rom'>
  <h1>Title:{users.title}</h1>
  </div>
  <h1 className='con'>{users.content}</h1>
  </>
  )
}

export default Seeblogs

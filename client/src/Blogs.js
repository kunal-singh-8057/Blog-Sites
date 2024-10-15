import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img3 from './assets/Group 33.png'
import img9 from './assets/image 9.png'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import './Blogs.css'

const Blogs = () => {

  const [users,setusers] = useState([]);
  const[rug,setrug] = useState([]);

  const{id} = useParams();

  useEffect(()=>{
    Axios.get("/viewblogs")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  
  

  return (
   <>
    <div className='ndiv'>
    <img src={img3} className='img3'></img>
    <div className='sl'>
    <Link className='nl' to='/home'>Home</Link>
    <Link className='nl' to='/blogs'>Blogs</Link>
    <Link className='nl' to='/trends'>Trends</Link>
    <Link className='nl' to='/about'>About</Link>
    </div>
    <Link className='cb' to='/add'>Create Blogs</Link>
    </div>

   

    <div className='nodiv'>
      <img src={img9} className='img9'></img>
      <h1>View all latest blogs
      <br></br>
      of your choice
      </h1>
    </div>

    <div className='Blogset'>
    {
      users.map((user)=>{
        return(
          <div className='vset'>
          <img src={user.image}></img>
            <h1>{user.title}</h1>
            <h4>{user.tags}</h4>
            <Link to={`/seeblog/${user._id}`} className='cab'>View Full Blogs</Link>
          </div>
        )
      })
    }
    </div>
   </>
  )
}

export default Blogs

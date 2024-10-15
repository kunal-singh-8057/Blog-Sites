import React from 'react'
import { Link } from 'react-router-dom'
import img3 from './assets/Group 33.png'
import img67 from './assets/image 1.png'
import './About.css'

const About = () => {
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

    <div className='noodiv'>
    <img src={img67} className='img67'></img>
    <h1>About Us</h1>
    <br></br>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   <br></br>
    </p>
    <br></br>
    <Link to='/blogs' className='cy'>View Blogs</Link>
    </div>
   </>
  )
}

export default About

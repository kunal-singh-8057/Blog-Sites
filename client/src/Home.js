import React from 'react'
import img3 from './assets/Group 33.png'
import {Link} from 'react-router-dom'
import img4 from './assets/image 1.png'
import './Home.css'

const Home = () => {
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

    <div className='bg'>
    <h1>Simple and <br></br>
    Tasty Food <br></br>
    Recepies</h1>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    <br></br>
    elit, sed do eiusmod tempor incididunt ut labore et dolore 
    <br></br>
    magna aliqua.
    </p>


    <div className='eb'>
    <button>New Recipies</button>
    <p>Delicious food combos</p>
    </div>

    
    </div>
  </>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import img3 from './assets/Group 33.png'
import img5 from './assets/imgs.png'
import img6 from './assets/img 25.png'
import img7 from './assets/image 7.png'
import img8 from './assets/image 8.png'
import './Trends.css'

const Trends = () => {
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

    <div className='bg1'>
    <h1>
    Fruit combination <br></br>
    for daily juice
    </h1>

    <img src={img5} className='img5'></img>
    <br></br>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
    sed do eiusmod tempor incididunt ut labore <br></br>
    et dolore magna
    </p>

    </div>

    <div className='ls'>
    <h1>Latest Trends for you</h1>

    <div className='csets'>

    <div className='dset'>
    <img src={img6} className='img6'></img>
    <h4>Best Juice for stamena</h4>
    <button>Read More</button>
    </div>


    <div className='dset'>
    <img src={img7} className='img6'></img>
    <h4>Best Juice for Kids</h4>
    <button>Read More</button>
    </div>


    <div className='dset'>
    <img src={img8} className='img6'></img>
    <h4>Best Juice for cools</h4>
    <button>Read More</button>
    </div>


    </div>

<br></br>
<br></br>
  <h1>Best for your Health</h1>
  
  <div className='csets'>

<div className='dset'>
<img src={img6} className='img6'></img>
<h4>Best Juice for stamena</h4>
<button>Read More</button>
</div>


<div className='dset'>
<img src={img7} className='img6'></img>
<h4>Best Juice for cools</h4>
<button>Read More</button>
</div>


<div className='dset'>
<img src={img8} className='img6'></img>
<h4>Best Juice for Kids</h4>
<button>Read More</button>
</div>


</div>


<br></br>
<br></br>
<h1>Kids Special for summar</h1>
<div className='csets'>

<div className='dset'>
<img src={img6} className='img6'></img>
<h4>Best Juice for stamena</h4>
<button>Read More</button>
</div>


<div className='dset'>
<img src={img7} className='img6'></img>
<h4>Best Juice for kids</h4>
<button>Read More</button>
</div>


<div className='dset'>
<img src={img8} className='img6'></img>
<h4>Best Juice for cools</h4>
<button>Read More</button>
</div>


</div>
    </div>
</>
  )
}

export default Trends

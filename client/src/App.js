import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import Blogs from './Blogs'
import Trends from './Trends'
import Addblogs from './Addblogs'
import Seeblogs from './Seeblogs'

const App = () => {
  return (
   <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/trends' element={<Trends/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/add' element={<Addblogs/>}></Route>
    <Route path='/seeblog/:id' element={<Seeblogs/>}></Route>
  </Routes>
</BrowserRouter>
   </>
  )
}

export default App

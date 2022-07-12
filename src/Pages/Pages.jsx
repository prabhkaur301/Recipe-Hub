import React from 'react'
import Home from './Home'
import Recipe from './Recipe';
import {Route,Routes} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
const Pages = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cuisine/:type" element={<Cuisine/>}/>
    <Route path="/search/:term" element={<Searched/>}/>
    <Route path="/recipe/:id" element={<Recipe/>}/>
    </Routes>
  )
}

export default Pages
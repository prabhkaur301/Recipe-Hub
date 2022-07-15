import {React,useEffect} from 'react'
import { Box } from './Style'
import {Link} from 'react-router-dom'
import PageNotFound from '../static/404.json'
import lottie from 'lottie-web';

const NotFound = () => {
    useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#not-found-animation"),
          animationData: PageNotFound,
          renderer: "svg", // "canvas", "html"
          loop: true, // boolean
          autoplay: true, // boolean
        });
      }, []);
     
  return (
    <Box>
        <div id="not-found-animation" style={{width:'20rem'}}></div>
        <Link to="/" style={{color:'#313131',fontWeight:'500'}}>Return back to Home page</Link>
      
    </Box>
  )
}


export default NotFound
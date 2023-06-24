import React from 'react'
import "./Nav.css"
import{Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'


const Nav = () => {
  return (
    
    <div className='navbar'>
   

  <div className="Logo">

   
  </div>
  

    

    
                <ul class="pages">


                <div class="flex flex2">

                  
                  <li>
                  <Link to="/">Home</Link>
                  </li>


                  <li>
                  <a href="../Routes/Design.js">Design</a>
                  </li>

                  <li>
                  <Link to="/InternetArt">Net Art</Link>
                  
                 
                  </li>

                  <li>
                  <Link to="/">Blogs</Link>
                  </li>

                  

                  </div>


                    
                    
                  </ul>

                  <div className='hamburger'>

                  <FaBars size={50} style={{color:'#fff'}}/>

                  </div>
    
            </div>
          
  )
}

export default Nav
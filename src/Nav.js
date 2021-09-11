import React, {useEffect, useState} from 'react';
import "./Nav.css"

function Nav() {

     const [show, handleShow] = useState(false);

     useEffect(() => {
          window.addEventListener("scroll", () => {
               if (window.screenY > 100) {
                   handleShow(true)
               } else {
                    handleShow(false)
              }
          })
          
          return () => {
               window.removeEventListener("scroll",()=>{})
          }
     }, []);

     return (
          <div className={`nav ${show && 'nav_black'}` }>
               <img
                    className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
               />

               <img
                    className="nav_avatar"
                    src="https://source.unsplash.com/random/200x200?sig=1"
                    alt="Profile pic"
               />

          </div>
     )
}

export default Nav

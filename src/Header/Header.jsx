import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <>
           <div className="Header">
               <img className="Header-image" alt='' ></img>
               <p className='first-text'>How To Feel Great in Your Body and Mind</p>
               <p className='second-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus at soluta.Lorem ipsum dolor sit.</p>
               <button className='Header-button-right'><a href='http://google.com'>SIGN UP</a></button>
               <button className='Header-button-left'><a href='http://google.com'>SEARCH</a></button>
               <a className='round-button' href='#contain'><i class="fa fa-chevron-down"></i></a>
               

           </div>
        </>
    )
}

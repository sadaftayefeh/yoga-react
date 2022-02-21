import React from 'react'
import { Link } from 'react-router-dom'
import "./TopBar.css"


export default function TopBar() {
    return (
        <>
        <div className="topBar">
            
                <button className='topBar-button'>
                    <Link to="/Login">Login</Link>
                </button>
                <div className="right-topBar">
                <ul>
                    
                    <li className="topRightItems"><a href='http://google.com'> FIND...</a>
                       
                    </li>
                    <li className="topRightItems"><Link to="/">Home</Link>
                    </li>
                    <li className="topRightItems"><a href='http://google.com'>
                        RESOURCES</a>
                        <ul>
                            <li>Host Training</li>
                            <li>Host Training</li>
                        </ul>
                    </li>
                    <li className="topRightItems"><Link to="/About">ABOUT</Link>
                        
                    </li>
                    <li className="topRightItems"><a href='http://google.com'>
                        JOIN</a>
                    </li>
                </ul>
            </div>
            <div className="left-topBar">
                <img className="logo-topBar" alt=''>
                    
                </img>
            </div>
        </div>
            
        </>
    )
}

import React from 'react'
import "../Content/Content.css"

import array from '../Content/content-images'



export default function Content() {
    return (
        <>
        <div className='Content' id='content'>
            

            {array.map((item)=>{
                return(
                    <>
                    <img alt='' src={item.image} className='image-content'/>
                  
                    </>
                )
            })}
            
            
            

            {/* <img className='image-content'  src={image1} alt=''/> */}
            {/* <div className="image-title">
                sad21af
            </div> */}
           
        </div>
            
        </>
    )
}

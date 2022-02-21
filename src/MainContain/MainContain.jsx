import React from 'react'
import "./MainContain.css"
import array from "./image"
import Content from './Content/Content'
import Slider1 from './Slider/Slider1'

const text=[{text:'Massage'},{text:'Meditate'},{text:'Healing'},{text:'Asanas'}]


export default function MainContain() {

    
    
   
    return (
        <>
        <div className='belowtheheader' id='contain'>
           <div className="third-text">
                   <h3 className='third-text-one'>Please Let Us To Know You Better</h3>
                   <p className='third-text-two'>You Can Find Your Favorite Topics Below</p>
               </div>
               <span className='line'></span>
              
               <div className="selection-groups">
                   {array.map((item,id)=>
                   {
                       return(
                           <img src={item.image} key={id} className='one' alt=''/>
                       )
                   }
                   
                   )}

                  
                  <div className='pgroups'>
                      {text.map((item1)=>{
                      return(
                          <p>{item1.text}</p>

                      )}
                      
                      )}

                  </div>
                  <a className='round-button-two' href='#content'><i class="fa fa-chevron-down"></i></a>
               </div> 
               </div>
               <div className="componentContainer">
               <div className='allcomponents'>
                   <Content/>
                   <a className='round-button-two'href='#slider' style={{top:"950px"}} ><i class="fa fa-chevron-down"></i></a>
                </div>
                <Slider1/>

                
                <div className="lastcontent" id='lastcontent'>
                    <div className="lastcontent-image">  </div>
                    <div className="lastcontent-submit">
                        <h1 style={{marginLeft:"250px"}}>MANZELAT Tasters</h1>
                        <p style={{top:"60px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid voluptate quasi sint, nostrum cupiditate voluptatibus nemo laboriosam.ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid voluptate quasi sint, nostrum cupiditate voluptatibus nemo laboriosam.</p>
                        <button className='lastcontent-button'><a href='http://google.com'>VIEW MANZELAT TASTERS!</a></button>
                        <p style={{top:"250px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid voluptate quasi sint.</p>
                        <button className='lastcontent-button-two' ><a href='http://google.com'>SUBMIT YOUR TASTERS</a></button>
                        </div>

                  

                </div>

               </div>
               

               
        </>
    )
}

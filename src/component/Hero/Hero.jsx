
import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      
     <div className="gallery">
  
  <div className="card" style={{"--bg" : "url(../public/sl22.jpg)"}}>
  
    <h1 className="card_title">राजेन्द्र आयुर्विज्ञान संस्थान, रांची </h1>
    <p className="card_about">
    Rajendra Institute of Medical Sciences
    </p>
    <p className="card_about1">
    An Autonomous Institute under the Govt. of Jharkhand
    </p>
    <button type="button" className="btn btn-outline-info btn-lg">Gallery</button>
  </div>


  <div className="card" style={{"--bg" : "url(../public/sl23.jpeg)"}}>
    <h1 className="card_title">राजेन्द्र आयुर्विज्ञान संस्थान, रांची </h1>
    <p className="card_about">
    Rajendra Institute of Medical Sciences
    </p>
    <p className="card_about1">
    An Autonomous Institute under the Govt. of Jharkhand
    </p>
    <button type="button" className="btn btn-outline-info btn-lg">Gallery</button>
  </div>
  
  <div className="card" style={{"--bg" : "url(../public/sl24.jpg)"}}>
  
    <h1 className="card_title">राजेन्द्र आयुर्विज्ञान संस्थान, रांची </h1>
    <p className="card_about">
    Rajendra Institute of Medical Sciences
    </p>
    <p className="card_about1">
    An Autonomous Institute under the Govt. of Jharkhand
    </p>
    
    
    <button type="button" className="btn btn-outline-info btn-lg">Gallery</button>
    
  
    
  </div>
</div>

    </div>
  )
}

export default Hero;
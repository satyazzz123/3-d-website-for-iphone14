import React from 'react';
import iphone from "../assets/images/iphone-14.jpg";
import HoldingPhone from "../assets/images/iphone-hand.png"

export default function Jumbotron() {
    const handleLearnMore=()=>{
        let element=document.querySelector(".sound-section")
        window.scrollTo({
            top:element.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    }
  return (
   <div className="jumbotron-section wrapper">
    <h2 className="title">
        New
    </h2>
<img src={iphone} alt="" className="logo" />
<p className="text">
    Big and Bigger
</p>
<span className="description">
    From $41.62/month for 24 months. Or $999 before trade-in
</span>
<ul className="links">
    <li><button className="button">Buy</button></li>
    <li><a onClick={handleLearnMore}  className="link">Learn More</a></li>
</ul>
<img className='iphone-img' src={HoldingPhone} alt="" />
   </div>
  )
}

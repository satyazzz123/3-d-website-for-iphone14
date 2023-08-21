import React from 'react'

export default function DisplaySection() {

    const handleTop=()=>{
        window.scrollTo({
            top:0,left:0,behavior:"smooth"
        })
    }
  return (
   <div className="display-section wrapper">
    <h2 className="title">
        New
    </h2>
    <p className="text">
        Brilliant
    </p>
    <span className="description">
        A display that's upto 2x brighter in the sun
    </span>
    <button className="button">
        try me
    </button>
    <button onClick={handleTop} className="back-button">
        Top
    </button>

   </div>
  )
}

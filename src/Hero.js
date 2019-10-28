import React from "react"

const Hero = (props) => {
    return(
        <div className="hero" style={{backgroundImage:`url(${props.heroImage})`}}>

            <div> <h1>{props.h1}</h1></div>

        </div>
    )
}
export default Hero
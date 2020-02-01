import React from "react"
import {Link,} from "react-router-dom"
import logo from  "./images/logo.png"
const Headerlarge = props => {

    return (
        <div className="headerContainer largeHeader">
            <div style={{position: "relative", left: 30, display:"flex",alignItems: "center" }}>
                <div className="imageContainer">
                    <img alt="logo" src={logo} className="imageFit"></img>
                </div>
                <h1 style={{marginLeft:30}}>Pick-a-Pup</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/adopt">Adopt</Link>
            <Link style={{marginRight:30}} to="/info">Breed Info</Link>
        </div>
    )
}

export default Headerlarge
import React from "react"
import {Link,} from "react-router-dom"
import logo from  "./images/logo.png"
const Headerlarge = props => {

    return (
        <div className="headerContainer largeHeader">
            <div style={{display:"flex",alignItems: "center", justifyContent: "space-evenly"}}>
                <div className="imageContainer">
                    <img alt="logo" src={logo} className="imageFit"></img>
                </div>
                <h1>Pick-a-Pup</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/adopt">Adopt</Link>
            <Link style={{marginRight:10}} to="/info">Breed Info</Link>
        </div>
    )
}

export default Headerlarge
import React from "react"
import Hero from "./Hero.js"
import dogs from "./images/backGroundDogs.jpeg"


const Home = props => {
    return (
       
        <div className="homePage">
            
            <Hero height="100vh"  heroImage={dogs} />
        </div>
    )
}
export default Home
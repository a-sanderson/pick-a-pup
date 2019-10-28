import React from "react"
import HamburgerMenu from "react-hamburger-menu"
import {Link, withRouter} from "react-router-dom"
import logo from  "./images/logo.png"

class Header extends React.Component{
    constructor(){
        super()
        this.state={
            open: false,
            isBoxVisible:false
        }
    }
    
    handleClick = () => {
       
        this.setState(prevState => ({ open: !this.state.open, isBoxVisible: !prevState.isBoxVisible }))
    }
    
    
    
    render(){
        
        const { isBoxVisible } = this.state
        
        return(
           
            // <div className="thisDiv">
            <>
           <section className="headerContainer header1">
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick}
                    width={30}
                    height={25}
                    strokeWidth={4}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
               
                <h1>Pick-a-Pup</h1>
                <div className="imageContainer">
                    <img alt="logo" src={logo} className="imageFit"></img>
                </div>
            </section>
            <nav className={`${isBoxVisible ? "navHidden" : " nav"}`} >
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/adopt">Adopt</Link>
                    <Link to="/info">Breed Info</Link>
            </nav>
            </> 
        )
    }
}
export default withRouter(Header)


import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

 const Footer = props => {
     return (
         <footer className="footer" >
             <div>
                 <p style={{marginLeft: "10px"}}> powered by TheDogApi and PetFinder.com </p>
             </div>
             <div className="iconContainer">
                <a className="smallIcon" href="https://github.com/a-sanderson"><FontAwesomeIcon icon={faGithub} size= "2x" /></a>
                <a className="smallIcon" href="https://www.linkedin.com/in/aaron-sanderson/"><FontAwesomeIcon icon={faLinkedinIn} size= "2x" /></a>
                <a className="largeIcon" href="https://github.com/a-sanderson"><FontAwesomeIcon icon={faGithub} size= "4x" /></a>
                <a className="largeIcon" href="https://www.linkedin.com/in/aaron-sanderson/"><FontAwesomeIcon icon={faLinkedinIn} size= "4x" /></a>
             </div>
         </footer>
     )
 }
 export default Footer
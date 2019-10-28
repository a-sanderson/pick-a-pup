import React from "react"
import {Link} from 'react-router-dom';
const LocationCard = props => {
    
    return(
        <div className="locationCard">
            <div><h2>{props.name}</h2><Link to={{pathname:`/adopt/${props.id}`, state: {...props.location, token: props.token}  }}>Click to view abailable pets !</Link>
            </div>
            <p>phone number: {props.phone}</p>
            <p>Address: {props.address}</p>
            <p>{props.city}, {props.state} {props.postcode}</p>

        </div>
    )
}
export default LocationCard
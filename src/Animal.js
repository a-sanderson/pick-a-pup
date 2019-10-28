import React from "react"

const Animal = props => {
 console.log(props)
    return(
        
        <div className="animalContainer">
            <div className="innerAnimalC">
                <div>
                    <h1>{props.location.state.name}</h1>
                    <p>Breed: {props.location.state.breeds.primary}</p>
                    <p>Age: {props.location.state.age}</p>
                    <p>Gender: {props.location.state.gender}</p>
                    <p>Size: {props.location.state.size}</p>
                    <p>House Trained:  {props.location.state.attributes.spayed_neutered}</p>
                    <p>Spayed/Neutered: {props.location.state.attributes.spayed_neutered ? props.location.state.attributes.spayed_neutered : "N/A"}</p>
                </div>
                <div className="dogImgC"><img className="imageFit" alt="dog" src={props.location.state.photos[0].large}></img></div>
            </div>
            <p style={{textAlign: "center", marginLeft: 10, marginRight: 10}}>{props.location.state.description}</p>
            <h3>Contact for More Info</h3>
            <div style={{display: "flex", width: "100%", justifyContent: "space-evenly", alignItems: "center"}}>
                <h5>{props.location.state.contact.email}</h5>
                <h5 >{props.location.state.contact.phone}</h5>
            </div>
        </div>    
    )
}

export default Animal
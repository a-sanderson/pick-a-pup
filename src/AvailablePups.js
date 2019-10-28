import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";


class AvailablePups extends React.Component {
    constructor(){
        super()
        this.state={
            animals:[]
            
        }
    }
    componentDidMount(){
        axios.get(`https://api.petfinder.com${this.props.location.state._links.animals.href}`, {
            headers: {
                Authorization: `Bearer ${this.props.location.state.token}`
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                animals: res.data.animals
            },()=>console.log(this.state.animals))
            
        })
    }
    render(){
        console.log(this.props)
        const mappedAnimals = this.state.animals.map(animal => 
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width:"100vw", marginTop: "20%"}}>
                <Link className="breedLink" key={animal.id} to={{pathname:`/adopt/:id/${animal.id}`, state: {...animal}}}>{animal.name}</Link> 
            </div>
         )
         console.log(mappedAnimals)
        return(
            <div>
            {mappedAnimals}
            </div>
        )

    }
}

export default AvailablePups
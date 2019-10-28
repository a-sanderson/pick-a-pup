import React from "react"
import SearchBar from "./SearchBar.js"
import axios from "axios"
import {Link} from 'react-router-dom';


export default class Info extends React.Component {
    constructor(){
        super()
        this.state = {
            breedTerm: "",
            breeds: [],
            
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        
        axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${this.state.breedTerm}`,{
            headers: {
               "x-api-key":  `${process.env.REACT_APP_KEY}`
            }
        })
        
        .then(res=> {
            this.setState({
                breeds: res.data
            })
        } )
        .catch(err => console.log(err))

    }

    render(){
        const mappedBreeds = this.state.breeds.map(breed => 
        <div style={{display: "flex", flexDirection: "clumn", justifyContent: "space-evenly", alignItems: "center"}}>
            <Link className="breedLink"  key={breed.id} to={{pathname:`/info/${breed.id}`, state: {...breed}}}>{breed.name}</Link>
        </div>)
        

        return(
            <main>
                <h1>Breed Info</h1>
                <p>The path to a perfect pup fit for your home starts here with some research!
                With our Breed Research tool, you can narrow down a dog with the perfect size, temperament and life-span for your family.
                You work a ton and will not have time to take your new family member on daily multi-mile hikes? No worries! Find a dog that does not 
                require a ton of exercise! Are you expecting a newborn soon? Perfect, find a dog breed that is great with children. It is important 
                to pick a companion that fits your needs, lifestyle, and personality. Get started below by typing in a keyword or breed name.
                 </p>
                <div style={{marginTop: "400", marginBottom: "10", height: "20%", padding: "100px"}}>
                    <SearchBar
                        handleSubmit = {this.handleSubmit}
                        breedTerm = {this.state.breedTerm}
                        handleChange = {this.handleChange}
                        name = "breedTerm"
                        buttonText = "search"
                        placeholder = "keyword"
                    />
                </div>
                {mappedBreeds}
            
            </main>
        )
    }
}

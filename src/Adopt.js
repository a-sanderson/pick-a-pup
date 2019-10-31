import React from "react"
import axios from "axios"
import AdoptSearchBar from "./AdoptSearchBar.js"
import LocationCard from "./LocationCard.js"




class Adopt extends React.Component{
    constructor(){
        super()
        this.state = {
            token:"",
            zipCode: "",
            milesFrom: "",
            locations: []

        }
    }
    fetchToken = async () =>
        await(await fetch("/.netlify/functions/tokenHider", {method: 'POST'})).json();

    componentDidMount(){
    //    const credentials = {
    //         id:process.env.REACT_APP_ID,
    //         secret:process.env.REACT_APP_SECRET
    //     }
    //     axios.post("http://api.petfinder.com/v2/oauth2/token", {
    //         grant_type: "client_credentials",
    //         client_id: credentials.id,
    //         client_secret: credentials.secret
    //     })
       
        this.fetchToken().then(data => {
            this.setState({
                token: data.access_token
            })
            // console.log(this.state.token)
        } )
        .catch(err => console.log(err))
        console.log("working")
        
    }
    handleChange = e => {
        const{name, value}= e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        
        axios.get(`https://api.petfinder.com/v2/organizations?location=${this.state.zipCode}&distance=${this.state.milesFrom}`, {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                locations: res.data.organizations,
                zipCode: "",
                milesFrom: ""
            })
        })
        .catch(err => console.log(err))

    }
    render(){
        const mappedLocations = this.state.locations.map(location => 
            <LocationCard key={location.id} 
                name={location.name} 
                id={location.id} 
                location= {location} 
                token={this.state.token} 
                phone={location.phone} 
                address={location.address.address1? location.address.address1 : "N/A"} 
                city={location.address.city} 
                state={location.address.state}
                postcode={location.address.postcode} />
         )
        
        
        
        // <Link key={location.id} to={{pathname:`/adopt/${location.id}`, state: {...location, token: this.state.token}}}>{location.name}</Link>)
        
        return(
            
            <main className="adoptPage">
                <div className="adoptHero">
                    {/* <div style={{width: "100%", height: "92%", backgroundColor: "#212529", opacity: ".5", zIndex: "4",  }}> */}
                        <h1>There are Thousands of Dogs Waiting to be Adopted</h1>
                        <div><h2>Use our Search Feature Below to Find a Pup Near You</h2></div>
                     
                </div>
                
                <div className="card list">
                    <h2 style={{fontFamily: "Roboto Condensed"}}>Things to consider when picking a dog</h2>
                    <ul>
                        <li>Most dogs live a decade or longer</li>    
                        <li>Consider coat-types for grooming</li>
                        <li>Different breeds have different energy levels</li>
                        <li>Consider exercise requirements</li>
                        <li>Possibly consider an older dog</li>
                        <li>Be open to getting a mixed breed</li>
                        <li>Puppies require a lot of time</li>
                    </ul>

                </div>
            <section className="searchAdoptDisplay">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 className="findMember">Find your new family member today</h1>
                    <AdoptSearchBar
                        handleChange={this.handleChange}
                        zipCode={this.state.zipCode}
                        milesFrom={this.state.milesFrom} 
                        handleSubmit={this.handleSubmit} />
                </div>
                <div className="locationList">
                {mappedLocations}

                </div>
            </section>       

            </main>
        )
    }
}

export default Adopt
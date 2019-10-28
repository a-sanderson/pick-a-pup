import React from "react"
import Home from "./Home.js"
import About from "./About.js"
import Adopt from "./Adopt.js"
import BreedInfo from "./BreedInfo.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Breed from "./Breed.js"
import AvailablePups from "./AvailablePups.js"
import {Switch,Route} from "react-router-dom"
import Animal from "./Animal.js"
import Headerlarge from "./Headerlarge.js"


class App extends React.Component {
    constructor(){
        super()
        this.state= {

        }
    }
    
    render() {

        return(
            <div>
            <Header/>
            <Headerlarge/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/adopt" component={Adopt}/>
                <Route exact path="/adopt/:id" component={AvailablePups} />
                <Route path="/adopt/:id/:animalid" render={routerProps  => <Animal  {...routerProps}/>}/>
                <Route exact path="/info" render={routerProps =><BreedInfo {...routerProps}/>}/>
                <Route path= "/info/:id" render={routerProps =><Breed {...routerProps}/>}/>
                {/* <Route path="/adopt" component={Adopt}/> */}
            </Switch>
            <Footer/>
            </div>
        )
    }
}
export default App

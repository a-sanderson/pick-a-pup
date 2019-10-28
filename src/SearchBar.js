import React from "react"

const SearchBar = props => {

        return(
            
            <form onSubmit={props.handleSubmit}>
                <input
                    type= "text"
                    name={props.name}
                    value={props.breedTerm}
                    onChange={props.handleChange}
                    placeholder={props.placeholder} />
                    <button>{props.buttonText}</button>
            </form>
        )
    }
export default SearchBar
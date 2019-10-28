import React from "react"

const AdoptSearchBar = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="number"
                name="zipCode"
                onChange={props.handleChange}
                value={props.zipCode}
                placeholder="enter zip">

            </input>
            <input
                type="number"
                name="milesFrom"
                onChange={props.handleChange}
                value={props.milesFrom}
                placeholder="miles">

            </input>
            <button>search</button>
        </form>
    )
}

export default AdoptSearchBar
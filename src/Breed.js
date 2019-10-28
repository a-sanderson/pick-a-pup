import React from 'react'

const Breed = props => {
    const {name, bred_for, breed_group, height, id, life_span,temperament, weight} = props.location.state
    console.dir(props)
    // const foundBreed = props.br.
    return (
        <div style={{marginTop: "20%"}} className="card" key={id}>

            <h1>{name}</h1>
            <h3>bred for {bred_for ? bred_for : "N/A"}</h3>
            <h4>Temperament: {temperament ? temperament : "N/A"}</h4>
            <h4>Life Span: {life_span}</h4>
            <p>adult height: {height.imperial} inches</p>
            <p>adult weight: {weight.imperial}lbs</p>


        </div>
    )
}
export default Breed
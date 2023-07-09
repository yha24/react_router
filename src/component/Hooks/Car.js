import React, { useState } from 'react';

function Car(){
    const [car, setcar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: '1964',
        color: 'red'
    });
    const updateColor = () => {
        setcar(previousState =>{
            return { ...previousState, color:"blue"}
        });
    }
    return (
        <div>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year} </p>
       <button type='submit' onClick={updateColor}>Blue</button>
        </div>
    )
}
//setCar({car.color='blue'})
export default Car;
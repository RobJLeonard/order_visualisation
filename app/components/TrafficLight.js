import React from 'react'
import './styles/Card.css'

function TrafficLight(props) {
    let colour = props.colour;

    return (
        <div className="traffic-light-container">
            <div className="traffic-light" style={{backgroundColor:colour}}></div>
        </div>
    )
}

export default TrafficLight

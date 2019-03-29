import React, { Component } from 'react';



export default class Hero extends Component{
    render(){
        return(
            <div className="mapImage wrapper">
            <div className="imageBtn">
                <img src="./assets/BlankMap.png" alt="MApImage"></img>   
                
            </div>
            <img src="./Russia.png"className="russia"></img>
            <div className="btn"><img src="./assets/google_maps_pin.png"></img></div>
            </div>
        )
    }
}



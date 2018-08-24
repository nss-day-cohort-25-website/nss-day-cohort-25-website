import React, { Component } from "react"
import "./NavBar.css"
// this is not the correct logo from mandy
import nss from '../img/Nss.png'


export default class NavBar extends Component {


    render() {
        return (
            <nav>
                <img src={nss} alt="nssLogo"/> 
                <h1> Cohort 25 </h1>
                <button onClick={this.props.partyToggle}>Party Mode</button>    
            </nav>
        )
    }
}

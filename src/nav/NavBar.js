import React, { Component } from "react"
import "./NavBar.css"
// this is not the correct logo from mandy
import nss from '../img/NSS/logo.png'


export default class NavBar extends Component {


    render() {
        return (
            <nav>
                <div id="nav-logo" className="nav-div">
                    <img src={nss} alt="nssLogo"/> 
                </div>
                <div className="nav-div">
                    <a id="nav-links" href="#">About</a>
                    <a id="nav-links" href="#skills">Technology</a>
                    <a id="nav-links" href="#students">Students</a>
                </div>
                <div id="nav-btn" className="nav-div">
                    <button id="party-btn" onClick={this.props.partyToggle}>🎉</button>
                </div>    
            </nav>
        )
    }
}

import React, { Component } from "react"
import "./NavBar.css"
// this is not the correct logo from mandy
import nss from '../img/NSS-logo.png'


export default class NavBar extends Component {

    // Set initial state
    state = {
        searchTerms: ''
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    search = (e) => {
        if (e.charCode === 13) {
            this.props.searchHandler(this.state.searchTerms)
            this.setState({ searchTerms: "" })
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <nav>
                <div id="nav-logo" className="nav-div">
                    <img src={nss} alt="nssLogo"/> 
                </div>
                <div className="nav-div">
                    <a id="nav-links" href="#">About</a>
                    <a id="nav-links" href="#">Technology</a>
                    <a id="nav-links" href="#">Students</a>
                </div>
                <div id="nav-btn" className="nav-div">
                    <button id="party-btn" onClick={this.props.partyToggle}>🎉</button>
                </div>    
            </nav>
        )
    }
}

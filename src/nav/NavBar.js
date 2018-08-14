import React, { Component } from "react"
import "./NavBar.css"
// this is not the correct logo from mandy
import nss from '../img/Nss.png'


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
                <img src={nss} alt="nssLogo"/> 
                <h1> Cohort 25 </h1>
                <input id="searchTerms"
                    // value={this.state.searchTerms}
                    // onChange={this.handleFieldChange}
                    // onKeyPress={this.search}
                    // className="form-control w-100"
                    // type="search"
                    placeholder="Search for Student by Name"
                    // aria-label="Search" 
                    />
                <button>Party Mode</button>    
            </nav>
        )
    }
}

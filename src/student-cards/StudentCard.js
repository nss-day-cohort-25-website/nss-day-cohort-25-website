import React, { Component } from 'react'
import './StudentCard.css'

class StudentCard extends Component {

    state = {
        cardFlipped: false
    }

    flipCard = () => {
        // function for setting the state of the card to the opposite of what it currently is
        this.setState({ cardFlipped: this.state.cardFlipped ? false : true })
    }

    modalOn = () => {
        this.props.showModal(this.props.student.id)
    }


    render() {
        return (
            <React.Fragment>
                <div class="card__student">
                    <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                    {this.state.cardFlipped ?
                        <React.Fragment>
                            <p>Preffered Skill: {this.props.student.preferred_skill}</p>
                            <p>Bio: {this.props.student.bio}</p>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <img src={this.props.student.serious_photo} alt={this.props.student.last_name} />
                        </React.Fragment>
                    }
                    <a target="blank" href={this.props.student.github}>github</a>
                    <a target="blank" href={this.props.student.linkedin}>linkedIn</a>
                    <button onClick={this.modalOn}>{this.state.cardFlipped ? "picture" : "info"}</button>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

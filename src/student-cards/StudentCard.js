import React, { Component } from 'react'
import './StudentCard.css'

class StudentCard extends Component {

    modalOn = () => {
        this.props.showModal(this.props.student.id)
    }


    render() {
        return (
            <React.Fragment>
                <div className="card__student">
                    <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                    <img src={this.props.student.serious_photo} alt={this.props.student.last_name} />
                    <a target="blank" href={this.props.student.github}>github</a>
                    <a target="blank" href={this.props.student.linkedin}>linkedIn</a>
                    <button onClick={this.modalOn}>info</button>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

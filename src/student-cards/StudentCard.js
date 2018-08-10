import React, { Component } from 'react'
import './StudentCard.css'

class StudentCard extends Component {


    render() {
        return (
            <React.Fragment>
                <div class="card__student">
                    <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                    <img src={this.props.student.serious_photo} alt={this.props.student.last_name}/>
                    <a href={this.props.student.github}>github</a>
                    <a href={this.props.student.linkedin}>linkedIn</a>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

import React, { Component } from 'react'


class StudentCard extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                <img src={this.props.student.serious_photo} alt={this.props.student.last_name}/>
                <a href={this.props.student.github}>github</a>
                <a href={this.props.student.linkedin}>linkedIn</a>
            </React.Fragment>
        )
    }
}

export default StudentCard

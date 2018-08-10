import React, { Component } from 'react'


class StudentCard extends Component {


    render() {
        return (
            <React.Fragment>
                <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                <a href={this.props.student.github}>github</a>
                <a href={this.props.student.linkedin}>linkedIn</a>
            </React.Fragment>
        )
    }
}

export default StudentCard

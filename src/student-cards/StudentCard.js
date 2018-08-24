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
                    <img className="student__img" onClick={this.modalOn} src={this.props.partyOn ? this.props.student.fun_photo : this.props.student.serious_photo} alt={this.props.student.last_name} />
                    <span className="student__name">{this.props.student.first_name} {this.props.student.last_name}</span>
                    <div>
                        <span><a target="blank" href={this.props.student.github}><i className="fab fa-github student__links"></i></a></span>
                        <span><a target="blank" href={this.props.student.linkedin}><i className="fab fa-linkedin student__links"></i></a></span>
                        <span onClick={this.modalOn}><i className="fas fa-info-circle student__links"></i></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

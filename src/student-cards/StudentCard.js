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
                        <img className="student__img" src={this.props.student.serious_photo} alt={this.props.student.last_name} />
                        <div>
                        <span><a target="blank" href={this.props.student.github}><i class="fab fa-github student__links"></i></a></span>
                        <span><a target="blank" href={this.props.student.linkedin}><i class="fab fa-linkedin student__links"></i></a></span>
                        <span onClick={this.modalOn}><i class="fas fa-info-circle student__links"></i></span>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

import React, { Component } from 'react'
import './StudentCard.css'

class StudentCard extends Component {

    modalOn = () => {
        this.props.showModal(this.props.student.id)
    }


    render() {
        return (
            <React.Fragment>
<<<<<<< HEAD
                    <div className="card__student">
                        <img className="student__img" onClick={this.modalOn} src={this.props.student.serious_photo} alt={this.props.student.last_name} />
                        <p className="student__name">{this.props.student.first_name} {this.props.student.last_name}</p>
                        <div>
                        <span><a target="blank" href={this.props.student.github}><i class="fab fa-github student__links"></i></a></span>
                        <span><a target="blank" href={this.props.student.linkedin}><i class="fab fa-linkedin student__links"></i></a></span>
                        <span onClick={this.modalOn}><i class="fas fa-info-circle student__links"></i></span>
                        </div>
                    </div>
=======
                <div className="card__student">
                    <p>{this.props.student.first_name} {this.props.student.last_name}</p>
                    <img src={this.props.partyOn ? this.props.student.fun_photo : this.props.student.serious_photo} alt={this.props.student.last_name} />
                    <a target="blank" href={this.props.student.github}>github</a>
                    <a target="blank" href={this.props.student.linkedin}>linkedIn</a>
                    <button onClick={this.modalOn}>info</button>
                </div>
>>>>>>> master
            </React.Fragment>
        )
    }
}

export default StudentCard

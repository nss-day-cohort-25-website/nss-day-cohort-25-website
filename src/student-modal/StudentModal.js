import React, { Component } from 'react'
import './StudentModal.css'


class StudentModal extends Component {

    state = {
        currentStudent: {
            id: null,
            first_name: "",
            last_name: "",
            serious_photo: null,
            fun_photo: null,
            github: "",
            linkedin: "",
            email: "",
            personal_website: "",
            other_website: "",
            other_website_description: "",
            preferred_skill: "",
            bio: ""
        }
    }

    componentDidMount() {
        const student = this.props.students.find(student => student.id === this.props.modalStudent)
        console.log(student)
        this.setState({ currentStudent: student })
    }


    render() {
        return (
            <React.Fragment>
                <div className="student__modal close" onClick={this.props.hideModal}>
                    <div className="student__modal__content">
                        <div className="student__close" >
                            <i onClick={this.props.hideModal} class="far fa-times-circle"></i>
                        </div>
                            <h1>{this.state.currentStudent.first_name} {this.state.currentStudent.last_name}</h1>
                        <div className="student__container">
                            <div className="student__left">
                                <img src={this.state.currentStudent.serious_photo} alt={this.state.currentStudent.last_name} height={200} width={200} />
                            </div>
                            <div className="student__right">
                                <p>{this.state.currentStudent.bio}</p>
                                <p>Preferred Skills: {this.state.currentStudent.preferred_skill}</p>

                            </div>
                            <div className="student__middle">
                                <a target='_blank' href={this.state.currentStudent.github}><i class="fab fa-github student__links"></i></a>
                                <a target='_blank' href={this.state.currentStudent.linkedin}><i class="fab fa-linkedin student__links"></i></a>
                                <a  href={this.state.currentStudent.email}><i class="far fa-envelope student__links"></i></a>
                                <a target='_blank' href={this.state.currentStudent.personal_website}><i class="fas fa-user-circle student__links"></i></a>
                                {
                                    this.state.currentStudent.other_website === '' ?
                                    null
                                    :
                                    <a target='_blank' href={this.state.currentStudent.other_website}><i class="fas fa-globe-americas student__links"></i></a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentModal

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
                        <div>
                            <h1>{this.state.currentStudent.first_name} {this.state.currentStudent.last_name}</h1>
                            <img src={this.state.currentStudent.serious_photo} alt={this.state.currentStudent.last_name} height={200} width={200} />
                            <a target='_blank' href={this.state.currentStudent.github}>github</a>
                            <a target='_blank' href={this.state.currentStudent.linkedin}>linkedIn</a>
                        </div>
                        <div>
                            <p>bio: {this.state.currentStudent.bio}</p>
                            <p>preferred skills: {this.state.currentStudent.preferred_skill}</p>
                        </div>
                        <div>
                            <h3>{this.state.currentStudent.email}</h3>
                            <a target='_blank' href={this.state.currentStudent.personal_website}>{this.state.currentStudent.personal_website}</a>
                            <a target='_blank' href={this.state.currentStudent.other_website}>{this.state.currentStudent.other_website_description}</a>
                        </div>
                        <button onClick={this.closeModal} className="close">close</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentModal

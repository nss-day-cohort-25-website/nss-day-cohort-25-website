import React, { Component } from 'react'
import './StudentProfile.css'

class StudentProfile extends Component {

    // {id: 13 , first_name: 'Hayley', 
    // last_name: 'Landsberg', 
    // serious_photo: landsbergSerious, 
    // fun_photo: landsbergFun, 
    // github: 'https://github.com/hayleylandsberg', 
    // linkedin: 'www.linkedin.com/in/hayleyvheath',
    //  email: 'hayleylandsberg@gmail.com', 
    // personal_website: 'www.hayleylandsberg.com',
    // other_website: 'dribbble.com/hayleylandsberg', 
    // other_website_description: 'Dribbble', 
    // preferred_skill: 'Front End Development, React, Javascript, CSS', 
    // bio: "A risk management professional turned UX/UI Designer & Developer. I'm passionate about the user's experience and appreciate design thinking."},

    render() {
        return (
            <React.Fragment>
                <article class="Profile__student" id={this.props.student.id}>
                    <section>
                        <h1>{this.props.student.first_name} {this.props.student.last_name}</h1>
                        <img src={this.props.student.serious_photo} alt={this.props.student.last_name} />
                        <img src={this.props.student.fun_photo} alt={this.props.student.last_name} />
                        <a href={this.props.student.github}>github</a>
                        <a href={this.props.student.linkedin}>linkedIn</a>
                    </section>
                    <section>
                        <p>{this.student.bio}</p>
                        <p>{this.student.preferred_skill}</p>
                    </section>
                    <section>
                        <h3>{this.props.student.email}</h3>
                        <a href={this.props.student.personal_website}>{this.props.student.personal_website}</a>
                        <a href={this.props.student.other_website}>{this.props.student.other_website_description}</a>
                    </section>
                </article>
            </React.Fragment>
        )
    }
}

export default StudentCard

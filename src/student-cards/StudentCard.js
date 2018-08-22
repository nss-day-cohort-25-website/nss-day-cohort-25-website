import React, { Component } from 'react'
import './StudentCard.css'
import GithubLogo from '../img/cardIcons/Github.png';
import LinkedInLogo from '../img/cardIcons/Linkedin.png';
import MoreInfo from '../img/cardIcons/MoreInfo.png';

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
                    <span><a target="blank" href={this.props.student.github}><img className='student__links' src={GithubLogo} alt='Github'/></a></span>
                    <span><a target="blank" href={this.props.student.linkedin}><img className='student__links' src={LinkedInLogo} alt='LinkedIn'/></a></span>
                    <span onClick={this.modalOn}><img className='student__info' src={MoreInfo} alt='More Info'/></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentCard

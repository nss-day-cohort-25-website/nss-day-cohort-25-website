import React, { Component } from 'react'
import StudentCard from './StudentCard';


class StudentBlock extends Component {


    render() {
        return (
            <React.Fragment>
                <div class="container__student">
                {this.props.students.map(student => (
                    <StudentCard 
                        student={student}
                        showModal={this.props.showModal}
                    />
                ))}
                </div>
            </React.Fragment>
        )
    }
}

export default StudentBlock

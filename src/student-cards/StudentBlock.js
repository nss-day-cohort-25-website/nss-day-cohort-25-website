import React, { Component } from 'react'
import StudentCard from './StudentCard';


class StudentBlock extends Component {


    render() {
        return (
            <React.Fragment>
                {this.props.students.map(student => (
                    <StudentCard 
                        student={student}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default StudentBlock

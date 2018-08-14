import React, { Component } from 'react'
import StudentCard from './StudentCard';


class StudentBlock extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="container__student">
                {this.props.students.map(student => (
                    <StudentCard key={student.id}
                        student={student}
                    />
                ))}
                </div>
            </React.Fragment>
        )
    }
}

export default StudentBlock

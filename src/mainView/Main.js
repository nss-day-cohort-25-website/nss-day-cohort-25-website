import React, { Component } from 'react'
import StudentBlock from '../student-cards/StudentBlock';
import GroupTech from '../groupTech/groupTech'

class MainView extends Component {


    render() {
        return (
            <div>
                <GroupTech />
                <StudentBlock
                    students={this.props.students}
                />
            </div>
        )
    }
}

export default MainView



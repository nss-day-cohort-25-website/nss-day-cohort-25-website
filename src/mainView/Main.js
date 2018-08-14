import React, { Component } from 'react'
import StudentBlock from '../student-cards/StudentBlock';
import GroupTech from '../groupTech/groupTech'
import StudentModal from '../student-modal/StudentModal';

class MainView extends Component {


    render() {
        return (
            <div>
                <GroupTech />
                <StudentBlock
                    showModal={this.props.showModal}
                    students={this.props.students}
                    hideModal={this.props.hideModal}
                    modalShown={this.props.modalShown}
                />
                {this.props.modalShown ?
                <StudentModal
                    showModal={this.props.showModal}
                    students={this.props.students}
                    hideModal={this.props.hideModal}
                    modalShown={this.props.modalShown}
                    modalStudent={this.props.modalStudent}
                />
                :
                <React.Fragment>

                </React.Fragment>
                }
                
            </div>
        )
    }
}

export default MainView



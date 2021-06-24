import ProjectList from '../projects/ProjectList'
import { Component } from 'react'
import Notifications from './Notifications'
import { connect } from 'react-redux';
import { getProjects } from '../../store/actions/projectActions';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //we can use this function by using component's props
        getProjects: () => dispatch(getProjects())
    }
}

//connect  this component with redux's store
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

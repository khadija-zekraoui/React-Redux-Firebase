import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = () => {
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <Link to={'/project/' + 1}>
                        <span className="card-title ">Project title</span>
                    </Link>
                    
                    <p>Posted by khadija</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary

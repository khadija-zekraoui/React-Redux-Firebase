const CREATE_PROJECT = "CREATE_PROJECT";
const CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR";
const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECTS_ERROR = "GET_PROJECTS_ERROR";


const initState = {
    projects: [
        { "id": 1, "title": "Solarbreeze", "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices." },
        { "id": 2, "title": "Toughjoyfax", "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque." },
        { "id": 3, "title": "Redhold", "content": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem." },
    ],
}

const ProjectReducer = (state = initState, action) => {

    switch (action.type) {
        case CREATE_PROJECT:
            console.log('Created project', action.project);
            return state;

        case CREATE_PROJECT_ERROR:
            console.log('Create project error', action.error);
            return state;

        case GET_PROJECTS:
            console.log('Get projects from database', action.projects);
            return { ...state, projects: action.projects };

        case GET_PROJECTS_ERROR:
            console.log('Get projects from database error', action.error);
            return state;

        default:
            return state;
    }
}

export default ProjectReducer;
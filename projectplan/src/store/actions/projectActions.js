
export const createProject = (project) => {
    //dispatch is a function that dispatch an action to the reducer 
    // getFirebase, getFirestore are extra arguments
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        //make async call to database

        //get a reference to our firestore database
        const firestore = getFirestore();

        //access to projects collection and add the project to it
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'khadija',
            authorLastName: 'zekraoui',
            authorId: 123456,
            createdAt: new Date()

        }).then(() => dispatch({
            type: 'CREATE_PROJECT', project: project //dispatch the action after executing some code
        })).catch((error) => dispatch({
            type: 'CREATE_PROJECT_ERROR', error
        }))
    }
};


export const getProjects = () => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {

        //make async call to database

        //get a reference to our firestore database
        const firestore = getFirestore();

        const projects = [];
        //access to projects collection and add the project to it
        firestore.collection('projects').get()
            .then(data => {
                data.forEach(doc => {
                    const project = doc.data();
                    project.id = doc.id;
                    projects.push({id:doc.id, ...doc.data()});
                });

                dispatch({ type: 'GET_PROJECTS', projects });
            }).catch((error) => dispatch({
                type: 'GET_PROJECTS_ERROR', error
            }))
    }
}


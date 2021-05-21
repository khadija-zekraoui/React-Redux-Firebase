
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
            type: 'CREATE_PROJECT', project: project
        })).catch((error) => dispatch({
            type: 'CREATE_PROJECT_ERROR', error
        }))

        //dispatch the action after executing some code

    }
};


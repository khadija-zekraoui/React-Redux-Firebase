import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ProjectReducer from './projectReducer';

//add diffrent reducers and we can access them via these properties(auth, project ...)
const rootReducer = combineReducers({
    auth: authReducer,
    project: ProjectReducer
})

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

//middleware that allows us to execute code(call API, access DDBB)
import thunk from 'redux-thunk';

import firebase from "firebase/app";

/*packages specifically designed for redux and firebase to work together:
  means that we will be able to use the firebase API to interact with the DDBB
  and also sync our firestore DDBB with our react store
*/
//provides bindings to the firebase service in particular
import { getFirestore, reduxFirestore } from "redux-firestore";

//provides bindings to the firebase service as a whole
import { getFirebase } from "react-redux-firebase";

import fbConfig from './config/fbConfig'

//create store
//apply thunk as a middleware.
//applyMiddleware can receive a list of middlewares and it turns of a store enhancer.
//Store enhancers are a formal mechanism for adding capabilities to Redux itself
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    //enhance redux' store with these packages with firebase's configuration
    reduxFirestore(firebase, fbConfig) // redux bindings for firestore
  )
);

ReactDOM.render(
  //provider helps to bind redux with the app 
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);


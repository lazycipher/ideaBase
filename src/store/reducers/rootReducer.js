import authReducer from './authReducer';
import ideaReducer from './ideaReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    idea: ideaReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;

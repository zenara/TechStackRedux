import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'

export default combineReducers({
    libraries: () => []
});

// console.log(store.getState());
// { libraries: []}
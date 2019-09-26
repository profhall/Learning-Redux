import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import { fetchTodos } from '../redux/actions';



const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === 'development') {
        const { logger } = require('redux-logger');
        middlewares.push(logger);
    }

    // create and populate the Redux store
    // if the browser has redux dev tools installed use it else use regular compose method
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

    // Give some time for the axios mock to be configured by the integration test
    setTimeout(() => {
        store.dispatch(fetchTodos());
    }, 50);
    return store;
};

export default configureStore;





/*Old Store.js*/
// import { createStore } from "redux";
// import rootReducer from "./reducers";
//
// /*
// *
// * The second argument allows us to use redux dev tools
// * */
//
// export default createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
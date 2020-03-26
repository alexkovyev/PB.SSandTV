import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
let middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, thunkMiddleware, loggerMiddleware];
} else {
    middleware = [...middleware, thunkMiddleware];
}

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(...middleware))
    );
}
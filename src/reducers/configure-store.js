import { createStore } from 'redux';
import rootReducer from './root-reducer';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    if (module.onReload) {
        module.onReload(() => {
            const nextReducer = require('./root-reducer');
            store(replaceReducer(nextReducer.default || nextReducer));

            return true;
        });
    }

    return store;
}

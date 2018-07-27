import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    app: (state = { app: 'asd', counter: 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    counter: state.counter + 1
                };
            default:
                return state;
        }
    }
});

export default rootReducer;

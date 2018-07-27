import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        app: state.app
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment() {
            dispatch({
                type: 'INCREMENT'
            });
        }
    }
}


const Component = ({ app, increment, counter }) => {
    console.log(app);
    return (
        <div>
            <h2>
                My Component!!!
            </h2>
            <button onClick={increment}>+</button>
            { app.counter }
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

import React from 'react';
import PropTypes from 'prop-types';
import Hello from './Hello';
import store from '../store';
import {Provider} from "react-redux";


function Root() {
    return (
        <Provider store = {store}>
            <Hello />
        </Provider>
    );
}

Root.propTypes = {};
Root.defaultProps = {};

export default Root;

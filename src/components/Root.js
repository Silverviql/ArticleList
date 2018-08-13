import React from 'react';
import PropTypes from 'prop-types';
import Hello from './Hello';
import store from '../store';
import {Provider} from "react-redux";


function Root(props) {
    return (
        <Provider store = {store}>
            <Hello {...props}/>
        </Provider>
    );
}

Root.propTypes = {};
Root.defaultProps = {};

export default Root;

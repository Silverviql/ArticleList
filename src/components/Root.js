import React from 'react';
import Hello from './Hello';
import store from '../store';
import {Provider} from "react-redux";


function Root() {
    return (
        <Provider store = {store}>
            <Hello name={"Polya"} action={"Eat"}/>
        </Provider>
    );
}

Root.propTypes = {};
Root.defaultProps = {};

export default Root;

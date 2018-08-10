import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataRange from "./DataRange";
import Select from "./Select";

class Filters extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <Select/>
                <DataRange/>
            </div>
        );
    }
}

export default Filters;

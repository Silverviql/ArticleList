import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataRange from "./DataRange";
import SelectFilter from "./SelectFilter";

class Filters extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <SelectFilter/>
                <DataRange/>
            </div>
        );
    }
}

export default Filters;

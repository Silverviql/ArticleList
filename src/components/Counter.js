import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {} from '../AC'
import {increment} from "../AC";

class Counter extends Component {
    static defaultProps = {};

    static propTypes = {
        counter : PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    state = {};

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.hundleIncrement}>Increment me</button>
            </div>
        );
    }

    /*hundleIncrement = () =>{
        console.log('---', 'incrementing')
        this.props.dispatchIncrement()
    }*/
    hundleIncrement = () =>{
        console.log('---', 'incrementing')
        const {increment} = this.props
        increment()
    }
}


export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)

/*
function mapStateToProps(state) {
    return{
        counter: state.count
    }
}

const mapToDispatch = {
    dispatchIncrement: increment
}
const decorator = connect(mapStateToProps,mapToDispatch )

export default decorator(Counter);*/

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class App extends Component {
static defaultProps = {
    numberOfMonths: 1,
};
constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
}
getInitialState() {
    return {
        from: undefined,
        to: undefined,
    };
}
handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
}
handleResetClick() {
    this.setState(this.getInitialState());
}
render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>

        <div className="RangeExample">
            <p>
                {!from && !to && 'Please select the first day.'}
                {from && !to && 'Please select the last day.'}
                {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                {from &&
                to && (
                    <button className="link" onClick={this.handleResetClick}>
                        Reset
                    </button>
                )}
            </p>
            <DayPicker
                className="Selectable"
                numberOfMonths={this.props.numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
            />
        </div>
        </div>
    );
}
}



import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Selecttion from 'react-select';

/*const options = articles.map(article => (
    {value: article.title, lable: article.id}
));*/ // почему то с массивом не рабоает. значение в консоле есть, в селект не приходят.
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class Select extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = { selectedOption: null};

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <Selecttion options = {options} value={selectedOption} onChange={this.handleChange} isMulti/>
            </div>
        );
    }
handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
}
}

export default Select;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'
import {mapToArr} from '../../helpers'



class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(options =>options))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            value: article.id,
            label: article.title
        }))
        console.log(articles)
        console.log(selected)
        return (
                <Select
                    options={options}
                    value={selected}
                    isMulti
                    onChange={this.handleChange}
                />
        );
    }

}

export default connect(state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles)
}), { changeSelection })(SelectFilter)

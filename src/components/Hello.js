import React, { PureComponent } from 'react';
import articles from  '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleList from './ArticleList';
import ArticleChart from "./ArticleChart";
import Select from 'react-select';

/*const options = articles.map(article => (
    {value: article.title, lable: article.id}
));*/ // почему то с массивом не рабоает. значение в консоле есть, в селект не приходят.
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];


class Hello extends PureComponent {

        state = {
            revenrted: false,
            selectedOption: null
        };
        revert = revert.bind(this);

    render() {
        const { selectedOption } = this.state;
        return (
            <div className='container'>
                <Select options = {options} value={selectedOption} onChange={this.handleChange} isMulti/>
                <div className='row'>
                    <div className='col-lg-12 jumbotron'>
                        <h1 className='display-3'>Hello World {this.props.name} and i love {this.props.action}
                         <button className='btn' onClick = {this.revert}>Revert </button>
                        </h1>
                    </div>
                    <div className='col-lg-12'>
                        <ArticleList  articles={this.state.revenrted ? articles.slice().reverse() :articles}/>
                        <ArticleChart articles={this.props.article}/>
                    </div>
                </div>
            </div>
        );
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
}


function revert(){
    this.setState({
        revenrted: !this.state.revenrted
    })
}

export default Hello;

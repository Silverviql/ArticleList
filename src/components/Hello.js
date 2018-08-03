import React, { PureComponent } from 'react';
import ArticleList from './ArticleList';
import articles from  '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';


class HelloWorld extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            revenrted: false
        }
        this.revert = revert.bind(this)
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 jumbotron'>
                        <h1 className='display-3'>Hello World {this.props.name} and i love {this.props.action}
                         <button className='btn' onClick = {this.revert}>Revert </button>
                        </h1>
                    </div>
                    <div className='col-lg-12'>
                    <ArticleList  articles={this.state.revenrted ? articles.slice().reverse() :articles}/>
                    </div>
                </div>

            </div>
        );
    }
}

function revert(){
    this.setState({
        revenrted: !this.state.revenrted
    })
}

export default HelloWorld;

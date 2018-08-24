import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleList from './ArticleList';
import Filters from "./Filters";
import UserForm from "./UserForm";
import Counter from "./Counter";


class Hello extends PureComponent {

        state = {
            revenrted: false
        };
        revert = revert.bind(this);

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
                        <Counter/>
                        <UserForm/>
                        <Filters articles={[]}/>
                        <ArticleList />
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

export default Hello;

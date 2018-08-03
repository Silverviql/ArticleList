import React, { Component, PureComponent } from 'react';
import Button from '@material-ui/core/Button';

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            /*isOpen: props.defaultOpen*/
        }
        this.handleClick = handleClick.bind(this)
    }

    /*shouldComponentUpdate(nextProps,nextState){
        return this.state.isOpen !== nextState.isOpen
    }*/

    componentWillMount(){
        console.log('---', 'mounting')
    }

    /*componentWillReceiveProps(nextProps){
        /!*console.log('---', 'will receive props')*!/
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }*/

    componentWillUpdate(){
        console.log('---', 'will update')
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props
       /* console.log('---',this.props)*/
        const body = isOpen && <section className='card-text'>{article.text}</section>
        return (
            <div className='card mx-auto col-lg-6'>
                <div className='card-header'>
                    <h2>
                        {article.title}
                        <Button  className='float-right' variant="contained" color="primary" onClick={onButtonClick}>
                            {isOpen ? 'close' : "open"}
                            </Button>
                    </h2>
                </div>
                <div className='card-body'>
                {body}
                <h6 className='float-right  text-muted'>creation date: {(new Date(article.date)).toDateString()}</h6>
            </div>
            </div>
        );
    }
}

function handleClick(){

    /*console.log('---','clicked')*/
    /*this.setState({
        isOpen: !this.state.isOpen
    })*/
}

export default Article;
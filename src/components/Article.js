import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CommentList from './CommentList/index';
import {connect} from "react-redux"
import {deleteArticle} from '../AC/index'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
            isOpen: PropTypes.bool,
            toogleOpen: PropTypes.func
    };
    state = {
        updateIndex: 0
    };

    /*shouldComponentUpdate(nextProps,nextState){
        return nextProps.isOpen !== this.props.isOpen
    }*/

    render() {
        const {article, isOpen, toogleOpen } = this.props;
        return (
            <div className='card mx-auto col-lg-6' ref = {this.setContainerRef}>
                <div className='card-header' >
                    <h2>
                        {article.title}
                        <Button  className='float-right' variant="contained" color="primary" onClick={toogleOpen}>
                            {isOpen ? 'close' : "open"}
                            </Button>
                        <button onClick={this.hundleDelete}>
                            delete me
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    {this.getBody()}
                       <h6 className='float-right  text-muted'>creation date: {(new Date(article.date)).toDateString()}</h6>
                 </div>

            </div>

        );
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section className='card-text'>
                {article.text}
                <Button  className='float-right' variant="contained" color="primary"
                         onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>Update
                </Button>
                <CommentList
                    article={article}
                    ref = {this.setCommentsRef}
                    key = {this.state.updateIndex}
                />
            </section>
        )
    }
    setContainerRef = ref =>{
        this.container = ref
        //console.log('---', ref)
    };

    setCommentsRef = ref =>{
      //  console.log('---', ref)
    };

    hundleDelete = () => {
        const {deleteArticle, article}= this.props
        deleteArticle(article.id)
        console.log('---', 'delete article')
    }
}

export default connect(null,{deleteArticle})(Article);

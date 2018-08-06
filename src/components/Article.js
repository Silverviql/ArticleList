import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import CommentList from './CommentList'

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            openCommentId: null
        }
    }


    render() {
        const {article, isOpen, onButtonClick } = this.props
        const body = isOpen && <section className='card-text'>{article.text}</section>
        const {comments} = article
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
                <CommentList
                    comments={comments}
                    isComment = {this.state.openCommentId === article.id}
                    onCommentClick={this.handleClick.bind(this, article.id)}
                />
            </div>
        );
    }
    handleClick = openCommentId => this.setState({
        openCommentId:this.state.openCommentId === openCommentId ? null : openCommentId
    })
}


export default Article;
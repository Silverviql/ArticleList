import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CommentList from './CommentList'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
            isOpen: PropTypes.bool,
            openArticleId: PropTypes.string,
            toogleOpen: PropTypes.func
    };

    render() {
        const {article, isOpen,openArticleId, toogleOpen } = this.props;
        const body = isOpen && <section className='card-text'>{article.text}</section>;
        const {comments} = article;
        return (
            <div className='card mx-auto col-lg-6'>
                <div className='card-header'>
                    <h2>
                        {article.title}
                        <Button  className='float-right' variant="contained" color="primary" onClick={toogleOpen}>
                            {isOpen ? 'close' : "open"}
                            </Button>
                    </h2>
                </div>
                <div className='card-body'>
                      {body}
                       <h6 className='float-right  text-muted'>creation date: {(new Date(article.date)).toDateString()}</h6>
                 </div>
               {<CommentList
                    comments={comments}
                    isOpen = {openArticleId === article.id}
                />}
            </div>
        );
    }

}


export default Article;
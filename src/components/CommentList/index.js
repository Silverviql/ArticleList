import React, {PureComponent} from 'react';
import Comment from '../Comment';
import './style.css'
import Button from '@material-ui/core/Button';
import toogleOpen from "../../decorators/toogleOpen";

 class CommentList extends PureComponent {
    static defaultProps = {
        comments: []
    }
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render(){
        const {comments, isOpen, toogleOpen} = this.props;
        if ( !comments.length ) {
            return <p>Нет комментариев</p>;
        }

        const commentElements = comments.map((comment, index) =>
            <li key={comment.id} className='article-list_li' >
                <Comment
                    user = {comment.user}
                    text = {comment.text}
                />
            </li>)
        const commentArticle = isOpen && <section className='card-text'>{commentElements}</section>

        return(
            <div>
                <h6>
                    {'Комментарии'}
                </h6>
                <Button  className='float-right' variant="contained" color="secondary" onClick={toogleOpen}>
                    {isOpen ? 'Закрыть' : "Открыть"}
                </Button>
                <ul>
                    {commentArticle}
                </ul>
            </div>
        )
    }



}

export default toogleOpen(CommentList);
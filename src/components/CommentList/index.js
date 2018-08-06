import React, {PureComponent} from 'react';
import Comment from '../Comment';
import './style.css'
import Button from '@material-ui/core/Button';

export default class CommentList extends PureComponent {
    static defaultProps = {
        comments: []
    }
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render(){
        const {comments, isComment, onCommentClick} = this.props;
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
        const lol = isComment && <section className='card-text'>{commentElements}</section>


        return(
            <div>
                <h6>
                    {'Комментарии'}
                </h6>
                <Button  className='float-right' variant="contained" color="secondary" onClick={onCommentClick}>
                    {isComment ? 'Закрыть' : "Открыть"}
                </Button>
                <ul>
                    {lol}
                </ul>
            </div>
        )
    }



}

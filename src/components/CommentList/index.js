import React, {PureComponent} from 'react';
import Comment from '../Comment';
import './style.css';
import Button from '@material-ui/core/Button';
import toogleOpen from "../../decorators/toogleOpen";
import PropTypes from "prop-types";
import CommentForm from "../CommentForm";

 class CommentList extends PureComponent {
    static defaultProps = {
        comments: []
    };
     static propTypes = {
         comments: PropTypes.array.isRequired,
         isOpen: PropTypes.bool,
         toogleOpen: PropTypes.func

     };

    render(){
        const {comments, isOpen, toogleOpen} = this.props;
        if ( !comments.length ) {
            return <p>Нет комментариев</p>;
        }

        const commentElements = comments.map((id) =>
            <li key={id} className='article-list_li' >
                <Comment
                    id = {id}
                />
            </li>);
        const commentArticle = isOpen && <section className='card-text'>{commentElements}</section>;
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
                <CommentForm/>
            </div>
        )
    }
}

export default toogleOpen(CommentList);
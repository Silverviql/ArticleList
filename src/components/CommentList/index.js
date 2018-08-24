import React, {} from 'react';
import Comment from '../Comment';
import './style.css';
import Button from '@material-ui/core/Button';
import toogleOpen from "../../decorators/toogleOpen";
import PropTypes from "prop-types";
import CommentForm from "../CommentForm";

function CommentList({article, isOpen, toogleOpen}) {
    const text = isOpen ? 'Скрыть комментарии' : 'Показать комментарии'

    return (
        <div>
            <Button  className='float-right' variant="contained" color="secondary" onClick={toogleOpen}>
                {text}
            </Button>
            {getBody({article, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toogleOpen decorator
    isOpen: PropTypes.bool,
    toogleOpen: PropTypes.func
}

function getBody({article: {comments = [], id}, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
    )
    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default toogleOpen(CommentList)
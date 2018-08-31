import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors/index'



function Comment({comment}) {
   /* console.log(comment.id)*/
    console.log(comment)
    return (<div>
        <h4>{comment.user}</h4>
        <div>{comment.text}</div>
    </div>);
};
Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        user:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })
};

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default  connect(mapStateToProps)(Comment)
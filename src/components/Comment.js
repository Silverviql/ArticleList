import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

function Comment({comment}) {

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

export default  connect((state, ownProps) => {
    console.log('---', state.comments, ownProps, )
    return {
        comment: state.comments.find(comment => comment.id === ownProps.id)
    }
})(Comment)
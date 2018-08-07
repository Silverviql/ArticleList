import React from "react";
import PropTypes from 'prop-types';

export default function Comment(props) {

    return (<div>
        <h4>{props.user}</h4>
        <div>{props.text}</div>
    </div>);
}
Comment.propTypes = {
    props: PropTypes.shape({
        user:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })
}
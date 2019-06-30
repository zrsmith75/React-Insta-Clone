import React from "react";
import "./comment.css";
import PropTypes from "prop-types";

const Comment = props => {
  const { username, text } = props.comment;
  // console.log(props.comment);
  return (
    <div className="comment">
      <h3>Username: {username}</h3>
      <p>Comment: {text} </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;

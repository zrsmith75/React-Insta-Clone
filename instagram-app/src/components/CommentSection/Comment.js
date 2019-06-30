import React from "react";
import "./comment.css";

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

export default Comment;

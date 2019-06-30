import React from "react";

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

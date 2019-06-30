import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  const { comment } = props;
  return (
    <div>
      <Comment comment={comment} />
    </div>
  );
};

export default CommentSection;

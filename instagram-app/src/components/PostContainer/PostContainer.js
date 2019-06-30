import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  const { data } = props;
  // console.log(`PostContainer ${data.id}`);
  return (
    <div>
      <p>From PostContaier</p>
      {data.comments.map(comment => {
        return <CommentSection key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default PostContainer;

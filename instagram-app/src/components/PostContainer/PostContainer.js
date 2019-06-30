import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  const { data } = props;
  // console.log(`PostContainer ${data.id}`);
  return (
    <div>
      From PostContaier
      {data.comments.map(comment => {
        return <CommentSection comment={comment} />;
      })}
    </div>
  );
};

export default PostContainer;

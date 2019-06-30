import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

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
PostContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};
export default PostContainer;

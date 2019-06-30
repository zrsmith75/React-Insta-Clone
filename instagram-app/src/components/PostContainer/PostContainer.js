import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import uuid from "uuid";
import moment from "moment";
import "./post-container.css";

const PostContainer = props => {
  const {
    comments,
    imageUrl,
    likes,
    thumbnailUrl,
    timestamp,
    username
  } = props.data;
  // console.log(`PostContainer ${data.id}`);

  const timestampDate = Date.parse(timestamp.replace("th", ""));
  return (
    <div className="post-container">
      }{" "}
      <div className="user-container">
        <img src={thumbnailUrl} alt="profile" />
        <p>{username}</p>
      </div>
      <img className="main-image" src={imageUrl} alt="banner" />
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p className="likes">{likes} likes</p>
      {comments.map(comment => {
        return <CommentSection key={uuid()} comment={comment} />;
      })}
      <p className="timestamp">{moment(timestampDate).toNow()}</p>
      <div className="horizontal" />
      <div className="comment-bottom">
        <input className="search" type="text" placeholder="Add a comment..." />
        <p className="three-dots">&#8230;</p>
      </div>
    </div>
  );
};
PostContainer.propTypes = {
  data: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};
export default PostContainer;

import "./postItem.css";
import BlueButton from "../../UI-UX/BlueButton/BlueButton";
// ! Icons
import { FiHeart } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import PropTypes from "prop-types";
import { BsSend } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { users } from "../../components/userData";
import { Link } from "react-router-dom";
function PostItem({ post, setShowOptionsMenu }) {
  PostItem.propTypes = {
    post: PropTypes.element,
    setShowOptionsMenu: PropTypes.bool,
  };
  const [showPostButton, setShowPostButton] = useState(false);
  const [comment, setComment] = useState("");
  const commentInputRef = useRef(null);

  const handleShowOptionsMenu = () => {
    setShowOptionsMenu(true);
    document.body.classList.add("no-scroll"); // Menüyü açtığınızda bu sınıfı ekleyin.
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  const postAuthorId = post.authorId;

  const postAuthor = users[postAuthorId - 1];

  useEffect(() => {
    if (comment.length === 0) {
      setShowPostButton(false);
    } else {
      setShowPostButton(true);
    }
  }, [comment]);

  return (
    <div className="postItem-wrapper">
      <div className="post-top flex justify-between items-center">
        <div className="post-author flex">
          <div className="profile-image mr-2">
            <Link to={`/profile-details/${postAuthor.id}`}>
              <img
                className="rounded-full w-9"
                src={postAuthor.profileImage}
                alt=""
              />
            </Link>
          </div>
          <div className="profile-info flex flex-col">
            <div className="usernameAndUpdatedTime">
              <Link
                to={`/profile-details/${postAuthor.id}`}
                className="username"
              >
                {postAuthor.username}
                <span className="time">{post.lastUpdatated}</span>
              </Link>
            </div>
            <span className="loaction">{post.loaction}</span>
          </div>
        </div>
        <div className="options-button">
          <button className="text-lg" onClick={handleShowOptionsMenu}>
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className="post-content">
        {post.img && <img className="rounded-sm" src={post.img} alt="" />}
        {post.video && (
          <video className="rounded-sm" controls>
            <source type="video/ogg" src={post.video}></source>
          </video>
        )}
      </div>
      <div className="post-bottom">
        <div className="reactions flex justify-between">
          <div>
            <button className="postLikeButton">
              <FiHeart />
            </button>
            <button className="postCommentButton">
              <FaRegComment />
            </button>
            <button className="postShareButton">
              <BsSend />
            </button>
          </div>
          <div>
            <button className="postSaveButton">
              <BiBookmark />
            </button>
          </div>
        </div>
        <span className="likeCount">{post.like} likes</span>
        <div className="post-description flex">
          <a href="">{postAuthor.username}</a>
          &nbsp;
          <p>{post.description}</p>
        </div>
        <a href="" className="viewAllComment">
          View all {post.comment} comment
        </a>
        <form action="" className="addCommentForm flex items-center">
          <input
            id="commentInput"
            value={comment}
            onChange={handleInputChange}
            ref={commentInputRef}
            className="w-full"
            type="text"
            placeholder="Add a comment"
          />
          <div className={showPostButton ? "visible" : "hidden"}>
            <BlueButton>Post</BlueButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostItem;

import { Link } from "react-router-dom";
import "./postDetail.css";
import PropTypes from "prop-types";
import BlueButton from "../BlueButton/BlueButton";
import pp from "../../assets/ProfilePic/pp4.jpg";
import { comments } from "./comment-data";
// !Icons
import { BiBookmark } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function PostDetail({ post, profile, setShowPostDetail }) {
  PostDetail.propTypes = {
    profile: PropTypes.array,
    post: PropTypes.img,
    setShowPostDetail: PropTypes.bool,
  };
  const closePostDetail = () => {
    setShowPostDetail(false);
  };
  return (
    <div className="post-detail-wrapper flex">
      <button
        className="close-post-detail absolute top-5 right-5 text-white w-7 h-7 rounded-full flex items-center justify-center"
        onClick={closePostDetail}
      >
        <AiOutlineClose className="text-sm" />
      </button>
      <div className="post-detail-image flex h-full w-full">
        <img className="h-full" src={post} alt="" />
      </div>
      <div className="post-detail-infos py-5 w-full flex flex-col">
        <div className="post-author flex items-center justify-center px-5 pb-3 mb-5">
          <div className="profile-image w-10">
            <Link
              to={`/profile-details/${profile.id}`}
              onClick={closePostDetail}
            >
              {" "}
              <img
                src={profile.profileImage}
                className="flex h-full rounded-full"
                alt=""
              />
            </Link>
          </div>
          <Link
            to={`/profile-details/${profile.id}`}
            onClick={closePostDetail}
            className="ml-3 text-sm"
          >
            <h1 className="username font-bold">{profile.username}</h1>
          </Link>
          <div className="follow-button ml-3 ">
            <BlueButton>Follow</BlueButton>
          </div>
          <button className="more-button ml-auto">
            <BsThreeDots />
          </button>
        </div>
        <div className="post-comments px-5">
          {comments.map((comment) => (
            <div className="comment-item flex mb-4" key={comment.id}>
              <div className="profile-image inline">
                <img
                  className=" flex w-12 rounded-full"
                  src={comment.profileImage}
                  alt=""
                />
              </div>
              <p className="text-sm w-3/4 ml-3">
                <strong className="mr-2">{comment.username}</strong>
                {comment.comment}
                <div className="comment-sub-infos text-gray-500  mt-1 pl-2 text-xs">
                  <span className="date mr-2">40w</span>
                  <span className="likes mr-2">42 likes</span>
                  <span className="reply mr-2">Reply</span>
                </div>
              </p>

              <div className="like-comment-button ml-auto">
                <button>
                  <FiHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="post-sub-details  pt-3">
          <div className="reactions flex justify-between text-2xl px-5 mb-3">
            <div>
              <button className="postLikeButton mr-4">
                <FiHeart />
              </button>
              <button className="postCommentButton mr-4">
                <FaRegComment />
              </button>
              <button className="postShareButton mr-4">
                <BsSend />
              </button>
            </div>
            <div>
              <button className="postSaveButton">
                <BiBookmark />
              </button>
            </div>
          </div>
          <div className="like-counter flex items-center px-5">
            <div className="like-profile-image">
              <img className="w-6 rounded-full" src={pp} alt="" />
            </div>
            <div className="text text-xs ml-2">
              Liked by <strong>johndoe</strong> and{" "}
              <strong> 1,245 others</strong>
            </div>
          </div>
          <div className="posted-date px-5 mb-2">
            <span className=" text-gray-500 text-xs">January 12</span>
          </div>
          <div className="add-comment px-5 w-full">
            <form action="" className="w-full mt-4 flex">
              <input
                className="w-full"
                type="text"
                placeholder="Add a comment ..."
              />
              <BlueButton>Post</BlueButton>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;

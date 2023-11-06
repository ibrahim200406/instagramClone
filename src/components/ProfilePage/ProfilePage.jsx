import "./profilePage.css";
// !Icons
import { MdSettings } from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";

import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import ProfilePageMenu from "../../UI-UX/ProfilePageMenu/ProfilePageMenu";
import PostDetail from "../../UI-UX/PostDetail/PostDetail";
function ProfilePage({ profile }) {
  ProfilePage.propTypes = {
    profile: PropTypes.array,
  };
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentButton, setCurrentButton] = useState(false);
  const [showPostDetail, setShowPostDetail] = useState(false);

  const [profileId, setProfileId] = useState(true);
  const profileid = Number(profile.id);
  useEffect(() => {
    if (profileid === 1) {
      setProfileId(false);
    }
  }, [profileid]);
  const posts = profile.posts;
  const openProfileMenu = () => {
    setShowProfileMenu(true);
  };
  const changeButton = () => {
    setCurrentButton(!currentButton);
  };
  const openPostDetail = (e) => {
    e.preventDefault();
    setShowPostDetail(true);
  };
  const closePostDetail = () => {
    setShowPostDetail(false);
  };
  const BackDrop = ({ closePostDetail }) => {
    BackDrop.propTypes = {
      closePostDetail: PropTypes.bool,
    };
    return <div className="postDetailBackDrop" onClick={closePostDetail}></div>;
  };

  return (
    <div className="profile-wrapper py-10 px-48">
      <div className="profile-top flex items-center mb-14">
        <div className="profile-image w-40 mr-28">
          <img
            className="rounded-full flex w-full"
            src={profile.profileImage}
            alt=""
          />
        </div>
        <div className="profile-infos ">
          <div className="username flex mb-5">
            <span>{profile.username}</span>
            <div className="buttons flex">
              {profileId ? (
                <>
                  {currentButton ? (
                    <button className="follow-button" onClick={changeButton}>
                      Following
                    </button>
                  ) : (
                    <button className="following-button" onClick={changeButton}>
                      Follow
                    </button>
                  )}
                  <button className="message-button">Message</button>
                  <button className="add-button">
                    <IoPersonAddOutline />
                  </button>
                </>
              ) : (
                <>
                  <button className="edit-profile-button">Edit Profile</button>
                  <button className="edit-profile-archive">View Archive</button>
                </>
              )}

              <button className="setting-button">
                <MdSettings />
              </button>
            </div>
          </div>{" "}
          <div className="profile-counters flex mb-5">
            <div className="post-counter mr-10">
              <span className="font-bold"> {profile.posts.length}</span> posts
            </div>{" "}
            <div className="followers-counter mr-10">
              <button onClick={openProfileMenu}>
                {" "}
                <span className="font-bold">177</span> followers
              </button>
              {showProfileMenu && (
                <ProfilePageMenu
                  showProfileMenu={showProfileMenu}
                  setShowProfileMenu={setShowProfileMenu}
                />
              )}
            </div>{" "}
            <div className="follower-counter mr-10">
              <button onClick={openProfileMenu}>
                <span className="font-bold">234</span> follower
              </button>
              {showProfileMenu && (
                <ProfilePageMenu
                  showProfileMenu={showProfileMenu}
                  setShowProfileMenu={setShowProfileMenu}
                />
              )}
            </div>
          </div>
          <div className="profile-description">
            <h1 className="fullname font-medium">
              {profile.name} {profile.surname}
            </h1>
            <p className="description w-80 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              dicta a veritatis blanditiis sequi, iusto cum cumque.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile profile top start */}
      <div className="profile-top mobile flex items-center mb-5">
        <div className="flex mb-5 ">
          <div className="profile-image w-40 mr-28">
            <img
              className="rounded-full flex w-full"
              src={profile.profileImage}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center ml-5">
            <div className="username flex mb-5">
              <span>{profile.username}</span>
            </div>{" "}
            <div className="buttons flex">
              {profileId ? (
                <>
                  {currentButton ? (
                    <button className="follow-button" onClick={changeButton}>
                      Following
                    </button>
                  ) : (
                    <button
                      className="following-button "
                      style={{ background: "#0C9EFF", color: "white" }}
                      onClick={changeButton}
                    >
                      Follow
                    </button>
                  )}
                  <button className="message-button">Message</button>
                  <button className="add-button">
                    <IoPersonAddOutline />
                  </button>
                </>
              ) : (
                <>
                  <button className="edit-profile-button">Edit Profile</button>
                  <button className="edit-profile-archive">View Archive</button>
                </>
              )}

              <button className="setting-button">
                <MdSettings />
              </button>
            </div>
          </div>
        </div>

        <div className="profile-infos px-2">
          <div className="profile-description mb-5">
            <h1 className="fullname font-medium">
              {profile.name} {profile.surname}
            </h1>
            <p className="description w-80 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              dicta a veritatis blanditiis sequi, iusto cum cumque.
            </p>
          </div>{" "}
          <div className="profile-counters flex justify-between mb-2 px-5">
            <div className="post-counter flex flex-col items-center">
              <span className="font-bold">{profile.posts.length}</span> posts
            </div>{" "}
            <div className="followers-counter ">
              <button
                className="flex flex-col items-center"
                onClick={openProfileMenu}
              >
                {" "}
                <span className="font-bold">177</span> followers
              </button>
              {showProfileMenu && (
                <ProfilePageMenu
                  showProfileMenu={showProfileMenu}
                  setShowProfileMenu={setShowProfileMenu}
                />
              )}
            </div>{" "}
            <div className="follower-counter ">
              <button
                className="flex flex-col items-center"
                onClick={openProfileMenu}
              >
                <span className="font-bold">234</span> follower
              </button>
              {showProfileMenu && (
                <ProfilePageMenu
                  showProfileMenu={showProfileMenu}
                  setShowProfileMenu={setShowProfileMenu}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile profile top end */}

      <div className="profile-bottom">
        <div className="allPosts">
          <span className="postTitle w-full mb-5">
            <AiOutlineTable /> &nbsp; POSTS
          </span>
          <div className="post-grid mt-12">
            {posts &&
              posts.map((post, index) => (
                <>
                  <>
                    <div
                      className="post-item relative"
                      key={index}
                      onClick={openPostDetail}
                    >
                      <img src={post} alt="" />
                      <a
                        href=""
                        className="post-item-backdrop absolute w-full h-full top-0 left-0 flex items-center justify-center"
                      >
                        <div
                          className="like flex items-center justify-center mr-8"
                          id="like"
                        >
                          {" "}
                          <AiFillHeart className="mr-1" /> 12{" "}
                        </div>
                        <div
                          className="comment flex justify-center items-center"
                          id="comment"
                        >
                          <FaComment className="mr-2" /> 2
                        </div>
                      </a>{" "}
                    </div>
                  </>
                  {showPostDetail ? (
                    <>
                      <React.Fragment>
                        {ReactDOM.createPortal(
                          <PostDetail
                            post={post}
                            profile={profile}
                            setShowPostDetail={setShowPostDetail}
                          />,
                          document.getElementById("overlay")
                        )}
                      </React.Fragment>
                      <React.Fragment>
                        {ReactDOM.createPortal(
                          <BackDrop closePostDetail={closePostDetail} />,
                          document.getElementById("backdrop")
                        )}
                      </React.Fragment>
                    </>
                  ) : (
                    ""
                  )}{" "}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

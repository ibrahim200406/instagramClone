import "./storyItem.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// !Images
import textLogo from "../../assets/Navbar/instagramTextLogoWhite.png";
// !Data
// !Icons
import { AiOutlineClose } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const BackDrop = ({ closeStory, CloseStory }) => {
  BackDrop.propTypes = {
    closeStory: PropTypes.bool,
    CloseStory: PropTypes.func,
  };
  return (
    <div className={closeStory ? "hidden" : "backdrop flex justify-between"}>
      <a href="" className="instagramLogo">
        <img src={textLogo} alt="Instagram" />
      </a>
      <a href="" className="closeButton" onClick={CloseStory}>
        <AiOutlineClose className="closeIcon" />
      </a>
    </div>
  );
};
const StoryItemOverlay = ({
  story,
  closeStory,
  setCloseStory,
  width,
  setWidth,
  stopBar,
  setStopBar,
}) => {
  StoryItemOverlay.propTypes = {
    story: PropTypes.array,
    closeStory: PropTypes.bool,
    setCloseStory: PropTypes.bool,
    width: PropTypes.bool,
    setWidth: PropTypes.bool,
    stopBar: PropTypes.bool,
    setStopBar: PropTypes.bool,
  };
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const pauseStory = () => {
    setWidth((preWidth) => preWidth);
    setStopBar(true);
  };
  const continueStory = () => {
    setStopBar(false);
    setWidth((preWidth) => preWidth + 0.5);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (stopBar === false) {
        if (width > 1 && width < 100) {
          setWidth((preWidth) => preWidth + 0.5);
        } else {
          setCloseStory(true);
          setWidth(2);
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [width, setCloseStory, showOptionsMenu, setWidth, stopBar]);

  const openOptionsMenu = () => {
    setShowOptionsMenu(true);
    setStopBar(true);
  };
  const closeOptionsMenu = (e) => {
    setShowOptionsMenu(false);
    setStopBar(false);
    e.preventDefault();
  };

  return (
    <div className={closeStory ? "hidden" : "story-item"}>
      <div className="storyImage">
        <img className="story-item-content-image" src={story.image} alt="" />

        <div className="story-infos w-full h-full flex flex-col py-6 px-5">
          <div className="top-bar">
            <div className="bar" id="bar" style={{ width: `${width}%` }}></div>
          </div>
          <div className="top-infos flex w-full  items-center ">
            <div className="profile-pic">
              <Link to={`/profile-details/${story.id}`}>
                <img
                  src={story.profileImage}
                  alt=""
                  className="w-8 mr-3 rounded-full"
                />
              </Link>
            </div>
            <div className="username flex">
              <Link to={`/profile-details/${story.id}`}>
                <h1>{story.username}</h1>
              </Link>
              <span className="storyPostedTime">24m</span>
            </div>{" "}
            <div className="pause-play-button ml-auto mr-2">
              {stopBar ? (
                <button onClick={continueStory}>
                  <BsFillPlayFill />
                </button>
              ) : (
                <button onClick={pauseStory}>
                  <BsFillPauseFill />
                </button>
              )}
            </div>
            <div className="optionsButton" onClick={openOptionsMenu}>
              <button>
                <FiMoreHorizontal />
              </button>
            </div>
            {showOptionsMenu ? (
              <div className="optionsMenu absolute w-full h-full top-0 left-0 items-center flex justify-center">
                <ul className="optionsMenuLinks flex flex-col items-center justify-center">
                  <a href="" className="w-full flex justify-center">
                    {" "}
                    <li className="optionsMenuLink red">
                      Report inappropriate
                    </li>
                  </a>
                  <a
                    href=""
                    className="w-full flex justify-center"
                    onClick={closeOptionsMenu}
                  >
                    <li className="optionsMenuLink">Cancel</li>
                  </a>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bottom-section mt-auto flex w-full items-center">
            <div className="reply-input w-full mr-5">
              <form action="">
                <input
                  type="text"
                  placeholder={`Reply to ${story.username}`}
                  className="w-full "
                  onClick={pauseStory}
                  onBlur={continueStory}
                />
              </form>
            </div>
            <div className="likeButton">
              <button>
                <AiOutlineHeart className="icon" />
              </button>
            </div>
            <div className="sendButton">
              <button>
                <BsSend className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function StoryItem({ story, closeStory, setCloseStory }) {
  StoryItem.propTypes = {
    story: PropTypes.array,
    closeStory: PropTypes.bool,
    setCloseStory: PropTypes.bool,
  };
  const [stopBar, setStopBar] = useState(false);
  const [width, setWidth] = useState(2);
  const CloseStory = (e) => {
    e.preventDefault();
    setWidth(2);
    setStopBar(false);
    setCloseStory(true);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop closeStory={closeStory} CloseStory={CloseStory} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <StoryItemOverlay
          closeStory={closeStory}
          CloseStory={CloseStory}
          setCloseStory={setCloseStory}
          story={story}
          width={width}
          setWidth={setWidth}
          stopBar={stopBar}
          setStopBar={setStopBar}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
}

export default StoryItem;

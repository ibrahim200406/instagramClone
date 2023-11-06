import React from "react";
import "./profilePageMenu.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
// ! Data
import { users } from "../../components/userData";
import { Link } from "react-router-dom";

const BackDrop = ({ showProfileMenu, closeProfileMenu }) => {
  BackDrop.propTypes = {
    showProfileMenu: PropTypes.bool,
    closeProfileMenu: PropTypes.func,
  };
  return (
    <div
      className={
        showProfileMenu ? "backdropProfileMenu" : "backdropProfileMenu hidden"
      }
      onClick={closeProfileMenu}
    ></div>
  );
};
const ProfilePageOverlay = ({ showProfileMenu, closeProfileMenu }) => {
  ProfilePageOverlay.propTypes = {
    showProfileMenu: PropTypes.bool,
    closeProfileMenu: PropTypes.func,
  };
  return (
    <div className={showProfileMenu ? "menu" : "menu hidden"}>
      <div className="menu-bar relative flex items-center justify-center top-3 font-bold">
        <button
          className="absolute top-1 right-3 text-2xl"
          onClick={closeProfileMenu}
        >
          {" "}
          <AiOutlineClose />
        </button>{" "}
      </div>
      <div className="menu-content mt-8">
        <ul className="profileMenu px-3">
          {users.map((user) => (
            <Link to={`/profile-details/${user.id}`} key={user.id} onClick={closeProfileMenu}>
              <li className="menu-item flex items-center mb-4">
                <div className="profile-image w-12 mr-2">
                  {" "}
                  <img
                    className="rounded-full"
                    src={user.profileImage}
                    alt={user.username}
                  />
                </div>
                <div className="profile-infos">
                  <h1 className="username font-bold text-sm">
                    {user.username}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {user.name} {user.surname}
                  </span>
                </div>
                <div className="ml-auto following-button">
                  <button>{user.isFollowing ? "Following" : "Follow"}</button>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
function ProfilePageMenu({ showProfileMenu, setShowProfileMenu }) {
  ProfilePageMenu.propTypes = {
    showProfileMenu: PropTypes.bool,
    setShowProfileMenu: PropTypes.bool,
  };
  const closeProfileMenu = () => {
    setShowProfileMenu(false);
  };
  return (
    <>
      <React.Fragment>
        {ReactDOM.createPortal(
          <BackDrop
            showProfileMenu={showProfileMenu}
            closeProfileMenu={closeProfileMenu}
          />,
          document.getElementById("backdrop")
        )}
      </React.Fragment>
      <React.Fragment>
        {ReactDOM.createPortal(
          <ProfilePageOverlay
            showProfileMenu={showProfileMenu}
            closeProfileMenu={closeProfileMenu}
          />,
          document.getElementById("overlay")
        )}
      </React.Fragment>
    </>
  );
}

export default ProfilePageMenu;

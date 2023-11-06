import "./notificationsMenu.css";
import PropTypes from "prop-types";

// ! Images
import notification1 from "../../assets/Posts/post12.jpg";
import notification2 from "../../assets/ProfilePic/pp2.jpg";
import notification4 from "../../assets/ProfilePic/pp7.jpg";
import notification5 from "../../assets/Posts/post11.jpg";
import notification6 from "../../assets/ProfilePic/pp4.jpg";
import notification7 from "../../assets/Posts/post2.jpg";
import notification8 from "../../assets/ProfilePic/pp8.jpg";
import notification9 from "../../assets/Posts/post13.jpg";
import notification10 from "../../assets/ProfilePic/pp15.jpg";
import notification11 from "../../assets/Posts/post10.jpg";
import notification12 from "../../assets/ProfilePic/pp8.jpg";
import notification13 from "../../assets/Posts/post9.jpg";
import notification14 from "../../assets/ProfilePic/pp6.jpg";
import { Link } from "react-router-dom";
function NotificationsMenu({ setShowNotifications }) {
  NotificationsMenu.propTypes = {
    setShowNotifications: PropTypes.bool,
  };
  const closeNotificationsArea = () => {
    document.body.classList.remove("no-scroll");
    setShowNotifications(false);
  };
  return (
    <>
      <div
        className="notificationsMenuBackdrop"
        onClick={closeNotificationsArea}
      ></div>
      <div className="notifications-area px-10 p-5">
        <h1 className="title font-semibold text-2xl mb-3">Notifications</h1>
        <h3 className="sub-title font-bold text-base mb-1">This week</h3>
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification14} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification13} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification4} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification1} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification2} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification1} alt="" />
          </div>
        </div>{" "}
        <hr className="my-3" />
        <h3 className="sub-title font-bold text-base  mb-1">This month</h3>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification6} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification5} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification2} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification1} alt="" />
          </div>
        </div>
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification7} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification8} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification10} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification9} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification12} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification11} alt="" />
          </div>
        </div>{" "}
        <div className="notification flex my-3">
          <div className="notification-image mr-3">
            <img className="rounded-full" src={notification4} alt="" />
          </div>
          <div className="notification-text mr-2 w-full">
            <p className="text-sm ">
              <strong>
                <Link to="/profile-details/1">Joe Doe</Link>
              </strong>{" "}
              and{" "}
              <strong>
                <Link to="/profile-details/6">emilyds</Link>
              </strong>{" "}
              <strong>
                <Link to="/profile-details/4">elifkaya</Link>
              </strong>{" "}
              liked your post. <span className="text-gray-400"> 24m</span>
            </p>
          </div>
          <div className="notification-image">
            <img src={notification1} alt="" />
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default NotificationsMenu;

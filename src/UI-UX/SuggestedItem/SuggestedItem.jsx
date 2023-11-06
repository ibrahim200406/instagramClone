import { Link } from "react-router-dom";
import BlueButton from "../BlueButton/BlueButton";
import "./suggestedItem.css";
import PropTypes from "prop-types";

function SuggestedItem({ profile }) {
  SuggestedItem.propTypes = {
    profile: PropTypes.array,
  };
  return (
    <div className="suggestedItem flex">
      <div className="suggestedProfileImage col-span-1 mr-3">
        <Link to={`/profile-details/${profile.id}`}>
          {" "}
          <img className="rounded-full" src={profile.profileImage} alt="" />
        </Link>
      </div>
      <div className="suggestedInfos flex justify-between w-full">
        <div className="suggestedInfo  flex justify-center flex-col w-full">
          <Link to={`/profile-details/${profile.id}`}>{profile.username}</Link>
          <span>Followed by ahmet.kaya</span>
        </div>
        <div className="followButton ">
          <BlueButton>Follow</BlueButton>
        </div>
      </div>
    </div>
  );
}

export default SuggestedItem;

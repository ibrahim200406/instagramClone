import "./homeRight.css";
// !Images
import currentUser from "../../../assets/ProfilePic/pp1.jpg";
import BlueButton from "../../../UI-UX/BlueButton/BlueButton";
import SuggestedItem from "../../../UI-UX/SuggestedItem/SuggestedItem";
// ! Data
import { suggestedData } from "../../../UI-UX/SuggestedItem/suggestedData";
import { Link } from "react-router-dom";
function HomeRight() {
  return (
    <>
      <div className="current-user-profile flex items-center">
        <div className="profile-image mr-4">
          <Link to="/profile-details/1">
            <img className="rounded-full" src={currentUser} alt="" />
          </Link>
        </div>
        <div className="infos flex w-full justify-between">
          {" "}
          <div className="profile-info flex flex-col ">
            <Link to="/profile-details/1" className="username">
              johndoe
            </Link>
            <span className="profile-fullName ">John Doe</span>
          </div>
          <div className="switch-button ">
            <a href="">
              <BlueButton>Switch</BlueButton>
            </a>
          </div>
        </div>
      </div>
      <div className="suggested">
        <div className="title flex justify-between ">
          <h1>Suggested for you</h1>
          <BlueButton className={"black"}>See All</BlueButton>
        </div>
        {suggestedData.map((profile) => (
          <SuggestedItem key={profile.id} profile={profile} />
        ))}
      </div>
      <div className="bottom-navbar">
        <ul className="links flex flex-wrap">
          <li className="link">
            <a href="">About</a>
          </li>
          <li className="link">
            <a href="">Help</a>
          </li>
          <li className="link">
            <a href="">Press</a>
          </li>
          <li className="link">
            <a href="">API</a>
          </li>
          <li className="link">
            <a href="">Jops</a>
          </li>
          <li className="link">
            <a href="">Privacy</a>
          </li>
          <li className="link">
            <a href="">Terms</a>
          </li>
          <li className="link">
            <a href="">Loaction</a>
          </li>
          <li className="link">
            <a href="">Language</a>
          </li>
          <li className="link">
            <a href="">Meta Verified</a>
          </li>
        </ul>
        <br />
        <span className="font-normal">© 2023 INSTAGRAM FROM META</span>
      </div>
    </>
  );
}

export default HomeRight;

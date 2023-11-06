import "./loginPage.css";
// !Images
import textLogo from "../../assets/Navbar/instagramTextLogo.png";
import facebookLogo from "../../assets/Login/facebookLogo.jpg";
import googlePlayApp from "../../assets/Login/googlePlay.png";
import microsoftApp from "../../assets/Login/microsoft.png";
import phone from "../../assets/Login/home-phones.png";
import ss1 from "../../assets/Login/screenshot1.png";
import ss2 from "../../assets/Login/screenshot2.png";
import ss3 from "../../assets/Login/screenshot3.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  const [currentScreenShot, setCurrentScreenShot] = useState(ss1);
  useEffect(() => {
    const ScreenShots = [ss1, ss2, ss3];
    let index = 1;
    function changeScreenShot() {
      if (index < 3) {
        console.log(index);
        setCurrentScreenShot(ScreenShots[index]);
        index++;
        setTimeout(changeScreenShot, 3000);
      } else {
        index = 0;
        setCurrentScreenShot(ScreenShots[index]);
        index++;
        setTimeout(changeScreenShot, 3000);
      }
    }
    setTimeout(changeScreenShot, 3000);
  }, []);
  return (
    <>
      <div className="login-form-wrapper flex px-80 py-14">
        <div className="login-form-image">
          <img className="w-full" src={phone} alt="" />
          <img
            src={ss1}
            alt="ss1"
            className={`ss ${currentScreenShot === ss1 ? "active" : ""}`}
          />
          <img
            src={ss2}
            alt="ss2"
            className={`ss ${currentScreenShot === ss2 ? "active" : ""}`}
          />
          <img
            src={ss3}
            alt="ss3"
            className={`ss ${currentScreenShot === ss3 ? "active" : ""}`}
          />
          <div className="login-form-image"></div>{" "}
        </div>
        <div className="login-form w-full pr-10">
          <div className="top flex flex-col items-center">
            <div className="instagram-text-logo">
              <img src={textLogo} alt="" />
            </div>
            <form action="" className="flex flex-col w-full">
              <input
                required
                type="text"
                placeholder="Phone number , username or email"
              />
              <input required type="password" placeholder="Password" />
              <Link to="/home" className="w-full">
                <button className="w-full" type="submit">
                  Log in
                </button>
              </Link>
              <span>OR</span>
            </form>
            <div className="otherLoginOptions">
              <a href="" className="flex items-center">
                {" "}
                <img className="w-20" src={facebookLogo} alt="" /> Login with
                Facebook
              </a>
            </div>
            <a className="forgotPasswordLink" href="">
              Forgot password?
            </a>
          </div>
          <div className="bottom">
            <div className="register-link flex items-center justify-center">
              <a href="">Don&apos;t have an account?</a>{" "}
              <a href="" className="signUp">
                Sign Up
              </a>
            </div>
            <div className="app-section flex flex-col items-center justify-center mt-4">
              <h5 className="title mb-4">Get the app.</h5>
              <div className="appLinks flex ">
                <a href="">
                  <img src={googlePlayApp} alt="" />
                </a>
                <a href="">
                  <img src={microsoftApp} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom px-80">
        <div className="submenu">
          <ul className="submenuLinks flex">
            <li className="submenu-link">
              <a href="">Meta</a>
            </li>
            <li className="submenu-link">
              <a href="">About</a>
            </li>
            <li className="submenu-link">
              <a href="">Blog</a>
            </li>
            <li className="submenu-link">
              <a href="">Jobs</a>
            </li>
            <li className="submenu-link">
              <a href="">Help</a>
            </li>
            <li className="submenu-link">
              <a href="">API</a>
            </li>
            <li className="submenu-link">
              <a href="">Privancy</a>
            </li>
            <li className="submenu-link">
              <a href="">Terms</a>
            </li>
            <li className="submenu-link">
              <a href="">Loactions</a>
            </li>
            <li className="submenu-link">
              <a href="">Instagram Lite</a>
            </li>
            <li className="submenu-link">
              <a href="">Threads</a>
            </li>
            <li className="submenu-link">
              <a href="">Contact Uploading & Non-Users</a>
            </li>
            <li className="submenu-link">
              <a href="">Meta Verified</a>
            </li>
          </ul>
        </div>
        <div className="copyright flex">
          <select className="languages mr-5">
            <option value="0">English</option>
            <option value="1">Turkish</option>
            <option value="2">German</option>
            <option value="3">French</option>
            <option value="4">Spanish</option>
            <option value="5">Japanese</option>
            <option value="6">Hindi</option>
            <option value="7">Arabic</option>
            <option value="8">Chinese</option>
            <option value="9">Russian</option>
            <option value="10">Portuguese</option>
            <option value="11">Italian</option>
            <option value="12">Dutch</option>
          </select>
          <span>© 2023 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

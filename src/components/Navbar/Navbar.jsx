import "./navbar.css";
import { useState, useEffect, useRef } from "react";
// !Images
import textLogo from "../../assets/Navbar/instagramTextLogo.png";
import profileImage from "../../assets/ProfilePic/pp1.jpg";
// !Icons
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { RiThreadsLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { PiSealWarning } from "react-icons/pi";
import { Link } from "react-router-dom";
import SearchMenu from "../../UI-UX/SearchMenu/SearchMenu";
import NotificationsMenu from "../../UI-UX/NotificationsMenu/NotificationsMenu";

function Navbar() {
  const [openMoreSubMenu, setOpenMoreSubMenu] = useState(false);
  const [showBlocker, setShowBlocker] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const menuRef = useRef(null);

  const openCloseMoreSubMenu = (e) => {
    e.preventDefault();
    setOpenMoreSubMenu((prevState) => !prevState); // Menünün şu anki durumunu tersine çevir
    setShowBlocker(true);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current === event.target) return; // Eğer tıklanan eleman "More" butonu ise fonksiyonu sonlandır

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMoreSubMenu(false);
        setShowBlocker(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const showSearchArea = () => {
    document.body.classList.add("no-scroll");
    setShowSearch(true);
  };

  const showNotificationsArea = () => {
    document.body.classList.add("no-scroll");
    setShowNotifications(true);
  };
  return (
    <>
      {/* Right Navbar */}
      <div className="navbar">
        <div className="logo-wrapper">
          <Link to="/home">
            <img src={textLogo} className="instagramTextLogo" alt="" />
            <BsInstagram className="instagramLogo" />
          </Link>
        </div>
        <ul className="menu-links">
          <li className="menu-item">
            <Link to="/home" className="menu-link flex items-center active">
              <GoHomeFill className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Home</span>
            </Link>
          </li>
          <li className="menu-item search">
            <Link
              onClick={showSearchArea}
              className="menu-link flex items-center "
            >
              <FiSearch className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Search</span>
            </Link>

            {showSearch && (
              <SearchMenu
                setShowSearch={setShowSearch}
                showSearch={showSearch}
              />
            )}
          </li>
          <li className="menu-item explore">
            <Link to="/explore" className="menu-link flex items-center">
              <MdOutlineExplore className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Explore</span>
            </Link>
          </li>{" "}
       
          <li className="menu-item ">
            <Link to="/messages" className="menu-link flex items-center">
              <BiMessageRoundedDetail className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Messages</span>
            </Link>
          </li>{" "}
          <li className="menu-item notifications">
            <Link
              to=""
              className="menu-link flex items-center"
              onClick={showNotificationsArea}
            >
              <AiOutlineHeart className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Notifications </span>
            </Link>
            {showNotifications && (
              <NotificationsMenu setShowNotifications={setShowNotifications} />
            )}
          </li>{" "}
          <li className="menu-item create">
            <a href="#" className="menu-link flex items-center">
              <CgAddR className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Create</span>
            </a>
          </li>{" "}
          <li className="menu-item ">
            <Link
              to={"/profile-details/1"}
              className="menu-link flex items-center"
            >
              <img src={profileImage} alt="" className="mr-4" />{" "}
              <span className="menuLinkText">Profile </span>
            </Link>
          </li>
        </ul>
        <ul className="sub-menu-links relative">
          <li className="menu-item">
            <a
              href="https://www.threads.net/"
              className="menu-link flex items-center relative"
            >
              <RiThreadsLine className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">Threads</span>{" "}
              <CiShare1 className="shareIcon" />
            </a>
          </li>
          <li className="menu-item  more">
            <a
              href=""
              className="menu-link flex items-center"
              onClick={openCloseMoreSubMenu}
            >
              <AiOutlineMenu className="menuIcon mr-4" />{" "}
              <span className="menuLinkText">More</span>
            </a>
          </li>
          {showBlocker ? <div className="moreMenuWrapper absolute"> </div> : ""}
          {openMoreSubMenu ? (
            <ul ref={menuRef} className="moreSubMenu absolute bottom-16 left-1">
              {/* More Submenu Top */}
              <div className="top">
                <li className="menu-item">
                  <a href="#" className="menu-link flex items-center">
                    <IoMdSettings className="menuIcon mr-4" />{" "}
                    <span className="menuLinkText">Settings</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link flex items-center">
                    <BsClockHistory className="menuIcon mr-4" />{" "}
                    <span className="menuLinkText">Your Activity</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link flex items-center">
                    <FaRegBookmark className="menuIcon mr-4" />{" "}
                    <span className="menuLinkText">Saved</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link flex items-center">
                    <BsSun className="menuIcon mr-4" />{" "}
                    <span className="menuLinkText">Switch Appearance</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link flex items-center">
                    <PiSealWarning className="menuIcon mr-4" />{" "}
                    <span className="menuLinkText">Report a problem</span>
                  </a>
                </li>
              </div>
              {/* More Submenu Bottom */}
              <div className="bottom">
                <li className="menu-item">
                  <a href="" className="menu-link flex items-center">
                    <span className="menuLinkText">Switch Accounts</span>
                  </a>
                </li>
                <li className="menu-item">
                  <Link to="/" className="menu-link flex items-center">
                    <span className="menuLinkText">Log Out</span>
                  </Link>
                </li>
              </div>
            </ul>
          ) : (
            ""
          )}
        </ul>
      </div>
      {/* Right Navbar */}

      {/* Mobile Navbar */}
      <header className="mobile-navbar flex justify-between">
        <div className="logo-wrapper">
          <Link to="/home">
            {" "}
            <img src={textLogo} alt="" />
          </Link>
        </div>
        <ul className="flex">
          <li className="menu-item create">
            <a href="#" className="menu-link flex items-center">
              <CgAddR className="menuIcon mr-4" />
            </a>
          </li>
          <li className="menu-item notifications">
            <Link
              className="menu-link flex items-center "
              onClick={showNotificationsArea}
            >
              <AiOutlineHeart className="menuIcon mr-4" />
            </Link>
            {showNotifications && (
              <NotificationsMenu setShowNotifications={setShowNotifications} />
            )}
          </li>
        </ul>
      </header>
      {/* Mobile Navbar */}
    </>
  );
}

export default Navbar;

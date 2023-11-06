import PropTypes from "prop-types";
import "./postOptionsMenu.css";
function PostOptionsMenu({ showOptionsMenu, setShowOptionsMenu }) {
  PostOptionsMenu.propTypes = {
    showOptionsMenu: PropTypes.bool,
    setShowOptionsMenu: PropTypes.bool,
  };
  const closeOptionsMenu = () => {
    setShowOptionsMenu(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <div
      className={
        showOptionsMenu
          ? "postOptionsMenuWrapper visible"
          : "postOptionsMenuWrapper"
      }
    >
      <div className="backdrop" onClick={closeOptionsMenu}></div>
      <div className="postOptionsMenu">
        <ul className="menu-links">
          <li className="menu-link red">
            <a href="">Report</a>
          </li>
          <li className="menu-link red">
            <a href="">Unfollow</a>
          </li>
          <li className="menu-link ">
            <a href="">Add to favorites</a>
          </li>
          <li className="menu-link ">
            <a href="">Go to post</a>
          </li>
          <li className="menu-link ">
            <a href="">Share to...</a>
          </li>
          <li className="menu-link ">
            <a href="">Copy link</a>
          </li>
          <li className="menu-link ">
            <a href="">Embed</a>
          </li>
          <li className="menu-link ">
            <a href="">About this account</a>
          </li>
          <li className="menu-link ">
            <a style={{ cursor: "pointer" }} onClick={closeOptionsMenu}>
              Cancel
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostOptionsMenu;

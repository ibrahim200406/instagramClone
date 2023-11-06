import PropTypes from "prop-types";
import "./homeContent.css";
import { postData } from "../../postData";
import { users } from "../../userData";

import PostItem from "../../../UI-UX/PostItem/PostItem";
function HomeContent({ setShowOptionsMenu }) {
  HomeContent.propTypes = {
    setShowOptionsMenu: PropTypes.bool,
  };
  return (
    <div className="posts">
      {postData.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          users={users}
          setShowOptionsMenu={setShowOptionsMenu}
        />
      ))}
    </div>
  );
}

export default HomeContent;

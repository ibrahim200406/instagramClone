import "./explorePage.css";
import { postData } from "../postData";
import { Link } from "react-router-dom";
import PostDetail from "../../UI-UX/PostDetail/PostDetail";
// !Icons
import { FaComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
function ExplorePage() {
  const [currentPostId, setCurrentPostId] = useState(null);
  const showPostDetail = (post) => {
    document.body.classList.add("no-scroll");
    setCurrentPostId(post.id);
  };
  const closePostDetail = () => {
    document.body.classList.remove("no-scroll");
    setCurrentPostId(null);
  };
  return (
    <div className="explore-page-wrapper px-36 py-10 grid grid-cols-3 gap-1">
      {postData.map((post) => (
        <>
          {post.img && (
            <>
              <>
                <Link
                  to=""
                  className="explore-item relative"
                  key={post.id}
                  onClick={() => showPostDetail(post)}
                >
                  <div className="explore-item-image">
                    <img src={post.img} alt="" />
                  </div>{" "}
                  <a
                    href=""
                    className="post-item-backdrop absolute w-full h-full top-0 left-0 flex items-center justify-center"
                    onClick={closePostDetail}
                  >
                    <div
                      className="like flex items-center justify-center mr-8"
                      id="like"
                    >
                      {" "}
                      <AiFillHeart className="mr-1" /> {post.like}{" "}
                    </div>
                    <div
                      className="comment flex justify-center items-center"
                      id="comment"
                    >
                      <FaComment className="mr-2" /> {post.comment}
                    </div>
                  </a>
                </Link>
              </>{" "}
              <div className={post.id !== currentPostId ? "hidden" : "visible"}>
                <PostDetail post={post.img} profile={post.author} />
                <div
                  className="postDetailBackDrop fixed w-full h-full "
                  onClick={closePostDetail}
                ></div>
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default ExplorePage;

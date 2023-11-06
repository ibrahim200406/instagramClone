import PropTypes from "prop-types";
import Stories from "./Stories/Stories";
import HomeContent from "./HomeContent/HomeContent";
import HomeRight from "./HomeRight/HomeRight";
import "./mainPage.css";
function MainPage({ setShowOptionsMenu, showStoryItem, setShowStoryItem }) {
  MainPage.propTypes = {
    setShowOptionsMenu: PropTypes.bool,
    showStoryItem: PropTypes.bool,
    setShowStoryItem: PropTypes.bool,
  };
  return (
    <main className="homePageWrapper grid grid-cols-3 ">
      <div className="left col-span-2">
        <Stories
          showStoryItem={showStoryItem}
          setShowStoryItem={setShowStoryItem}
        />
        <HomeContent setShowOptionsMenu={setShowOptionsMenu} />
      </div>
      <div className="right col-span-1">
        <HomeRight />
      </div>
    </main>
  );
}

export default MainPage;

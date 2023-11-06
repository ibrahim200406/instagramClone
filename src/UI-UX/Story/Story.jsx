import StoryItem from "../StoryItem/StoryItem";
import "./story.css";
import PropTypes from "prop-types";
import { StoriesData } from "../../components/MainPage/Stories/StoriesData";
import { useState } from "react";
function Story({ profile }) {
  Story.propTypes = {
    profile: PropTypes.array,
  };
  const [selectedStory, setSelectedStory] = useState(null);

  const [changeStoryBorder, setChangeStoryBorder] = useState(false);
  const [closeStory, setCloseStory] = useState(false);

  const openStory = (e) => {
    e.preventDefault();
    const storyData = StoriesData[profile.id - 1];
    setSelectedStory(storyData);
    setChangeStoryBorder(true);
    setCloseStory(false);
  };

  return (
    <>
      <div className="storyProfileItem p-2 rounded-full">
        <a href="" className="flex flex-col items-center" onClick={openStory}>
          <div
            className={
              changeStoryBorder
                ? "profileImage seen rounded-full"
                : "profileImage rounded-full"
            }
          >
            <img
              className="rounded-full"
              src={profile.profileImage}
              alt={profile.username}
            />
          </div>
          <span className="userName text-xs font-medium mt-1">
            {profile.username}
          </span>
        </a>
      </div>
      {selectedStory && (
        <StoryItem
          story={selectedStory}
          setCloseStory={setCloseStory}
          closeStory={closeStory}
        />
      )}
    </>
  );
}

export default Story;

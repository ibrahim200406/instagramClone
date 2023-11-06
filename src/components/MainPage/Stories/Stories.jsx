import "./stories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Story from "../../../UI-UX/Story/Story";
// ! Icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { StoriesData } from "./StoriesData";
import PropTypes from "prop-types";

function Stories({ showStoryItem, setShowStoryItem }) {
  Stories.propTypes = {
    showStoryItem: PropTypes.bool,
    setShowStoryItem: PropTypes.bool,
  };
  const CustomLeftArrow = ({ onClick }) => {
    CustomLeftArrow.propTypes = {
      onClick: PropTypes.func,
    };
    return (
      <button className="custom-left-arrow" onClick={() => onClick()}>
        <IoIosArrowDropleftCircle className="arrowIcon" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    CustomRightArrow.propTypes = {
      onClick: PropTypes.func,
    };
    return (
      <button className="custom-right-arrow" onClick={() => onClick()}>
        <IoIosArrowDroprightCircle className="arrowIcon" />
      </button>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1700 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 758 },
      items: 8,
    },
    mobile: {
      breakpoint: { max: 758, min: 0 },
      items: 5,
    },
  };
  return (
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      responsive={responsive}
      slidesToSlide={4}
      className="z-0"
    >
      {StoriesData.map((profile) => (
        <Story
          key={profile.id}
          profile={profile}
          showStoryItem={showStoryItem}
          setShowStoryItem={setShowStoryItem}
        />
      ))}
    </Carousel>
  );
}

export default Stories;

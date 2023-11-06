import "./blueButton.css";
import PropTypes from "prop-types";

function BlueButton(props) {
  BlueButton.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
  };
  return (
    <button className={props.className ? `${props.className}` : "blueButton"}>
      {props.children}
    </button>
  );
}

export default BlueButton;

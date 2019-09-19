import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Display = props => {
  const { display } = props;
  return (
    <div className="display" value={display}>
      {display.length !== 0
        ? display.length > 10
          ? display.substring(0, 10) +
            "..." +
            display.substring(
              display.split("").length - 4,
              display.split("").length
            )
          : display
        : "0"}
    </div>
  );
};

Display.propTypes = {
  display: PropTypes.string
};

const mapStateToProps = state => ({
  display: state.display
});

export default connect(mapStateToProps)(Display);

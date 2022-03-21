import React from 'react';
import PropTypes from 'prop-types';
import './scrollbutton.css';

export const ScrollButton = ({ scrollToId, ...props }) => {
  return (
    <a
      href={`#${scrollToId}`}
      {...props}
    >
      <img
        src="white-down-arrow.png" 
        className="storybook-scroll-arrow" />
    </a>
  );
};

ScrollButton.propTypes = {
  /**
   * The ID of the element to which to scroll
   */
  scrollToId: PropTypes.string,
};

ScrollButton.defaultProps = {
  scrollToId: null,
};

export default ScrollButton;

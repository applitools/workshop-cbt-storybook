import React from 'react';
import PropTypes from 'prop-types';
import './textinput.css';

export const TextInput = ({ placeholder, ...props }) => {
  return (
    <input
      type="text"
      placeholder="Enter text"
      className='storybook-text-input'
      {...props}
    />
  );
};

TextInput.propTypes = {
  /**
   * The placeholder text for the text input
   */
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: "Enter text"
};

export default TextInput;

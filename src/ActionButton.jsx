/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  const msg = 'button';
  const { buttonMsg } = props;
  const { action } = props;
  console.log(action);
  return (
    <button
      type="button"
      className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 w-1/4 mx-1 rounded-none "
      onClick={action}
    >
      {buttonMsg}
    </button>
  );
};

ActionButton.propTypes = {
  buttonMsg: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ActionButton;

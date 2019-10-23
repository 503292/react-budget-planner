import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => <span>{text}</span>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;

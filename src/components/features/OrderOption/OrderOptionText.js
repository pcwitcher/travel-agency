import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => (
  <input
    className={styles.input}
    type="text"
    onChange={event => setOptionValue(event.currentTarget.value)}
    required
  />
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.any,
};

export default OrderOptionText;

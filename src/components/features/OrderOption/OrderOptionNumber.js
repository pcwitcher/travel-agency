import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({
  currentValue,
  setOptionValue,
  limits: { min, max },
}) => {
  return (
    <div className={styles.number}>
      <input
        className={styles.inputSmall}
        type="number"
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
        min={min}
        max={max}
      />{' '}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node.isRequired,
  setOptionValue: PropTypes.func.isRequired,
  limits: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
};

export default OrderOptionNumber;

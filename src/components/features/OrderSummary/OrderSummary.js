import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = props => {
  const { tripCost, options } = props;

  return (
    <h2 className={styles.component}>
      Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
    </h2>

  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default OrderSummary;

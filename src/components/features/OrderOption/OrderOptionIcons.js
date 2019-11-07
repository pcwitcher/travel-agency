import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({
  values,
  setOptionValue,
  required,
  currentValue,
}) => {
  return (
    <div className={styles.icon}>
      {required ? (
        ''
      ) : (
        <div className={styles.icon} onClick={() => setOptionValue('')}>
          <Icon name={'times-circle'} />
            None
        </div>
      )}
      {values.map(v => {
        return (
          <div
            key={v.id}
            className={`${styles.icon} ${
              currentValue === v.id ? styles.iconActive : ''
            }`}
            onClick={() => setOptionValue(v.id)}
          >
            <Icon name={v.icon} />
            {v.name} {formatPrice(v.price)}
          </div>
        );
      })}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array.isRequired,
  setOptionValue: PropTypes.func.isRequired,
  required: PropTypes.bool,
  currentValue: PropTypes.string.isRequired,
};

export default OrderOptionIcons;

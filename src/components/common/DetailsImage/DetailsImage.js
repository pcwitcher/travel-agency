import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsImage.scss';

const DetailsImage = ({variant = '', children, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </div>
);

DetailsImage.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default DetailsImage;

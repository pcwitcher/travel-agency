import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailsBox.scss';

const DetailsBox = ({variant = '', children, ...otherProps}) => (
  <article {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </article>
);

DetailsBox.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default DetailsBox;

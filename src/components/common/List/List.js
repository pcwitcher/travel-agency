import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';

const List = ({variant = '', children, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </div>
);

List.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default List;

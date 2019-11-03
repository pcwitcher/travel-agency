import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Icon from '../Icon/Icon';
import styles from './ListItem.scss';

function ListItem(props) {
  return (
    <div className={styles.component}>
      <Icon name={props.icon} /><span>{ReactHtmlParser(props.title)}</span>
    </div>
  );
}

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default ListItem;

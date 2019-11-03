import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './CountrySummary.scss';
import SideImage from '../../common/SideImage/SideImage';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import {Row, Col} from 'react-flexbox-grid';

const CountrySummary = ({alpha3Code, name, flag, trips, region, subregion, languages, capital}) => (

  <Col xs={12}>
    <Link to={`/country/${alpha3Code}`} className={styles.component}>
      <DetailsBox variant='small light'>
        <DetailsImage variant='left'>
          <SideImage source={flag} />
        </DetailsImage>
        <Row>
          <Col md={12} lg={8} xl={9} lgOffset={4} xlOffset={3}>
            <Row>
              <Col md={6}>
                <h3 className={styles.name}>{name}</h3>
                <h4 className={styles.region}>{region} / {subregion}</h4>
                <List variant='light'>
                  <ListItem title={`<strong>Available trips:</strong> ${trips.length}`} icon='arrow-circle-right' />
                </List>
              </Col>
              <Col md={5} xl={6}>
                <div className={styles.details}>
                  <List variant='light'>
                    <ListItem title={`<strong>Capital:</strong> ${capital}`} icon='city' />
                    <ListItem title={`<strong>Languages:</strong> ${languages[0].name}`} icon='globe' />
                  </List>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </DetailsBox>
    </Link>
  </Col>

);

CountrySummary.propTypes = {
  alpha3Code: PropTypes.string,
  name: PropTypes.string,
  flag: PropTypes.string,
  trips: PropTypes.array,
  region: PropTypes.string,
  subregion: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.object),
  capital: PropTypes.string,
};

export default CountrySummary;

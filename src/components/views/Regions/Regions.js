import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';
import CountrySummary from '../../features/CountrySummary/CountrySummary';

import styles from './Regions.scss';
import {Grid, Row} from 'react-flexbox-grid';

const Regions = ({regions, subregions, countries}) => (

  <Section>
    <Grid>
      <PageTitle text='All regions' />
      {Object.keys(regions).map(regionName => (
        <div key={`region-${regionName}`}>
          <h2 className={styles.name}>{regionName}</h2>
          {regions[regionName].subregions.map(subregionName => (
            <div key={`subregion-${subregionName}`}>
              <h3 className={styles.subtitle}>{subregionName}</h3>
              <Row>
                {subregions[subregionName].countries.map(code => (
                  <CountrySummary key={countries[code].alpha3Code} {...countries[code]} />
                ))}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </Grid>
  </Section>

);

Regions.propTypes = {
  regions: PropTypes.objectOf(PropTypes.object),
  subregions: PropTypes.objectOf(PropTypes.object),
  countries: PropTypes.objectOf(PropTypes.object),
};

export default Regions;

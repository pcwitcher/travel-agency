import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import CountrySummary from '../../features/CountrySummary/CountrySummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row} from 'react-flexbox-grid';

const Countries = ({countries}) => (
  <Section>
    <Grid>
      <PageTitle text='All countries' />
      <Row between="md">
        {Object.keys(countries).map(code => (
          <CountrySummary key={code} {...countries[code]} />
        ))}
      </Row>
    </Grid>
  </Section>
);

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

export default Countries;

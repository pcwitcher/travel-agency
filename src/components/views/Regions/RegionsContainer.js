import {connect} from 'react-redux';
import Regions from './Regions';
import { getAllRegions } from '../../../redux/regionsRedux';
import { getAllSubregions } from '../../../redux/subregionsRedux';
import { getAllCountries } from '../../../redux/countriesRedux';

const mapStateToProps = state => ({
  regions: getAllRegions(state),
  subregions: getAllSubregions(state),
  countries: getAllCountries(state),
});

export default connect(mapStateToProps)(Regions);

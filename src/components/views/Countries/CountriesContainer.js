import { connect } from 'react-redux';
import Countries from './Countries';
import { getAllCountries } from '../../../redux/countriesRedux';

const mapStateToProps = (state, props) => ({
  countries: getAllCountries(state, props.match.params.countryCode),
});

export default connect(mapStateToProps)(Countries);

import {connect} from 'react-redux';
import Countries from './Countries';
import {getAllCountries} from '../../../redux/countriesRedux';

const mapStateToProps = state => ({
  countries: getAllCountries(state),
});

export default connect(mapStateToProps)(Countries);

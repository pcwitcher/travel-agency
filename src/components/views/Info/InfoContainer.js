import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  title: state.app.title,
});

export default connect(mapStateToProps)(Info);

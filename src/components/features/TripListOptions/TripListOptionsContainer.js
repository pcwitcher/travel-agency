import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters, changeSearchPhrase, changeDuration,
  addTag,
  removeTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDuration: (type, value) => dispatch(changeDuration(type, value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);

import { connect } from 'react-redux';
import { getData, addItem } from '../../actions/history';
import History from '../../components/History';

const mapStateToProps = state => (
  {
    history: state.history.history,
    loading: state.history.loading,
    error: state.history.error,
  }
);

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  addItem: (newDate, newTittle, newDesc) => dispatch(addItem(newDate, newTittle, newDesc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

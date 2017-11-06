import { connect } from 'react-redux';
import { getData, addItem } from '../../actions/misions';
import Misions from '../../components/Misions';

const mapStateToProps = state => (
  {
    misions: state.misions.misions,
    loading: state.misions.loading,
    error: state.misions.error,
  }
);

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  addItem: (newName, newObjectives, newInformation) => dispatch(addItem(newName, newObjectives, newInformation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Misions);

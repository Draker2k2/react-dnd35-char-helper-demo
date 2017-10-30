import { connect } from 'react-redux';
import Feats from '../../components/Feats';
import { getData, featToggle } from '../../actions/feats';

const mapStateToProps = state => (
  {
    feats: state.feats.feats,
    loading: state.feats.loading,
    error: state.feats.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    featToggle: name => dispatch(featToggle(name)),
    defenseIncrement: (checked, defenseName, bonusType, value) =>
      dispatch({ type: 'incrementDefense', payload: { checked, defenseName, bonusType, value } }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Feats);

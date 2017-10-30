import { connect } from 'react-redux';
import ClassFeatures from '../../components/ClassFeatures';
import { getData, classFeatureToggle } from '../../actions/classFeatures';

const mapStateToProps = state => (
  {
    classFeatures: state.classFeatures.classFeatures,
    loading: state.classFeatures.loading,
    error: state.classFeatures.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    classFeatureToggle: name => dispatch(classFeatureToggle(name)),
    defenseIncrement: (checked, defenseName, bonusType, value) =>
      dispatch({ type: 'incrementDefense', payload: { checked, defenseName, bonusType, value } }),
    hitIncrement: (checked, bonusType, value) =>
      dispatch({ type: 'incrementHit', payload: { checked, bonusType, value } }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ClassFeatures);

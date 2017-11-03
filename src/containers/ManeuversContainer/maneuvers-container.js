import { connect } from 'react-redux';
import Maneuver from '../../components/Maneuver';
import { getData, maneuverToggle } from '../../actions/maneuvers';

const mapStateToProps = state => (
  {
    maneuvers: state.maneuvers.maneuvers,
    loading: state.maneuvers.loading,
    error: state.maneuvers.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    maneuverToggle: name => dispatch(maneuverToggle(name)),
    abilityIncrement: (checked, abilityName, bonusType, value) =>
      dispatch({ type: 'incrementAbility', payload: { checked, abilityName, bonusType, value } }),
    defenseIncrement: (checked, defenseName, bonusType, value) =>
      dispatch({ type: 'incrementDefense', payload: { checked, defenseName, bonusType, value } }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Maneuver);

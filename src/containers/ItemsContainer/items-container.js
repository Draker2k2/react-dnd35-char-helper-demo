import { connect } from 'react-redux';
import Item from '../../components/Item';
import { getData, itemToggle } from '../../actions/items';

const mapStateToProps = state => (
  {
    items: state.items.items,
    loading: state.items.loading,
    error: state.items.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getData: () => dispatch(getData()),
    itemToggle: name => dispatch(itemToggle(name)),
    abilityIncrement: (checked, abilityName, bonusType, value) =>
      dispatch({ type: 'incrementAbility', payload: { checked, abilityName, bonusType, value } }),
    defenseIncrement: (checked, defenseName, bonusType, value) =>
      dispatch({ type: 'incrementDefense', payload: { checked, defenseName, bonusType, value } }),
    skillIncrement: (checked, skillId, bonusType, value) =>
      dispatch({ type: 'incrementSkill', payload: { checked, skillId, bonusType, value } }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Item);

import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ItemFiltrado extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, items) {
    function makeOperations(item, props) {
      props.itemToggle(item.name);
      item.bonuses.map(bonus => (
        (bonus.target === 'Abilities' ? props.abilityIncrement(item.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.target === 'Defenses' ? props.defenseIncrement(!item.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.target === 'Skills' ? props.skillIncrement(item.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.subTarget === 'Hit' ? props.hitIncrement(item.checked, bonus.type, bonus.value) : '')
      ));
    }

    const itemsToUnToggle = items.filter(item => item.slot === this.props.slotToFilter).filter(item => item.id !== e.target.value);
    itemsToUnToggle.map(itemToUnToggle => (
      (itemToUnToggle.checked === true ? makeOperations(itemToUnToggle, this.props) : false)
    ));

    if (e.target.value !== '-') {
      const itemToToggle = items.filter(itemToFilter => itemToFilter.id === e.target.value)[0];
      this.props.itemToggle(itemToToggle.name);
      itemToToggle.bonuses.map(bonus => (
        (bonus.target === 'Abilities' ? this.props.abilityIncrement(itemToToggle.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.target === 'Defenses' ? this.props.defenseIncrement(!itemToToggle.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.target === 'Skills' ? this.props.skillIncrement(itemToToggle.checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
        (bonus.subTarget === 'Hit' ? this.props.hitIncrement(!itemToToggle.checked, bonus.type, bonus.value) : '')
      ));
    }
  }
  render() {
    const { items, slotToFilter } = this.props;

    function isThisOne(item) {
      return item.slot === slotToFilter;
    }

    return (
      <FormControl bsSize="large" componentClass="select" placeholder="select" onChange={e => this.toggleIncrementFun(e, items)}>
        <option key="-" value="-">-</option>
        {items.length > 0 && items.filter(isThisOne).map(item => (
          <option key={item.id} value={item.id}>{item.id}</option>
        ))}
      </FormControl>
    );
  }
}

ItemFiltrado.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slot: PropTypes.string.isRequired,
    bonuses: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      target: PropTypes.string.isRequired,
      subTarget: PropTypes.string.isRequired,
    })).isRequired,
    checked: PropTypes.bool.isRequired,
  })).isRequired,
  abilityIncrement: PropTypes.func.isRequired,
  defenseIncrement: PropTypes.func.isRequired,
  skillIncrement: PropTypes.func.isRequired,
  hitIncrement: PropTypes.func.isRequired,
  itemToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  slotToFilter: PropTypes.string.isRequired,
};

export default ItemFiltrado;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.itemToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Abilities' ? this.props.abilityIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Skills' ? this.props.skillIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '')
    ));
  }
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.length > 0 && items.map(item => (
          <div key={item.name}>
            <p>
              <input name={item.name} type="checkbox" checked={item.checked} onClick={e => this.toggleIncrementFun(e, item.name, item.checked, item.bonuses)} />
              {item.name}
            </p>
            toggle: {item.checked === true ? 'true' : 'false'}
            <p>{item.description}</p>
            <div className="details">
              Bonuses:<br />
              { item.bonuses.map(bonus => (
                <span>{bonus.value} {bonus.type} bonus to {bonus.subTarget}<br /></span>
              ))}
            </div><br /><hr /><br />
          </div>
        ))}
      </div>
    );
  }
}

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
  itemToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Item;

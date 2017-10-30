import React, { Component } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const wellStyles = { width: 250 };

class Buffs extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.buffToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Abilities' ? this.props.abilityIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.subTarget === 'Hit' ? this.props.hitIncrement(checked, bonus.type, bonus.value) : '') ||
      (bonus.subTarget === 'Rolls' && checked === false ? this.props.hitExtraAttack(name, bonus.value) : '') ||
      (bonus.subTarget === 'Rolls' && checked === true ? this.props.removeExtraAttack(name, bonus.value) : '') ||
      (bonus.target === 'Damage' && bonus.subTarget !== 'Dices' ? this.props.damageExtraStaticBonus(checked, name, bonus.value) : '') ||
      (bonus.target === 'Damage' && bonus.subTarget === 'Dices' ? this.props.damageExtraDicesBonus(checked, name, bonus.value) : '')
    ));
  }
  render() {
    const { buffs } = this.props;
    return (
      <div>
        {buffs.length > 0 && buffs.map(buff => (
          <OverlayTrigger
            trigger="hover"
            placement="left"
            overlay={
              <Popover id="popover-trigger-hover" title={buff.name} >
                <p>{buff.description}</p><br />
                { buff.bonuses.map(bonus => (
                  <p><strong>{bonus.value} {bonus.type} bonus to {bonus.subTarget}</strong></p>
                  ))}
              </Popover>}
          >
            <p><Button id={buff.id} bsStyle="primary" style={wellStyles} active={buff.checked} onClick={e => this.toggleIncrementFun(e, buff.name, buff.checked, buff.bonuses)}>
              <div>
                {buff.name}
              </div>
            </Button></p>
          </OverlayTrigger>
        ))}
      </div>
    );
  }
}

Buffs.propTypes = {
  buffs: PropTypes.arrayOf(PropTypes.shape({
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
  hitIncrement: PropTypes.func.isRequired,
  hitExtraAttack: PropTypes.func.isRequired,
  removeExtraAttack: PropTypes.func.isRequired,
  damageExtraStaticBonus: PropTypes.func.isRequired,
  damageExtraDicesBonus: PropTypes.func.isRequired,
  buffToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Buffs;

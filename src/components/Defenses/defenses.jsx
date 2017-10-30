import React, { Component } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const tdRightStyle = { 'text-align': 'right' };
const wellStyles = { width: 120 };

class Defenses extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { defenses, dexterityMod, constitutionMod, wisdomMod } = this.props;
    return (
      <div>
        {defenses.length > 0 && defenses.map(defense => (
          <table><tr>
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={
                <Popover id="popover-trigger-focus" title="Popover left">
                  {(defense.bonuses.map(bonus =>
                     (bonus.value !== 0 ? <strong><p>{bonus.type} bonus: {bonus.value}</p></strong> : '')))}
                  <strong>
                    {defense.id !== 'AC' ?
                      (defense.classModifiers.map(classModifier => (
                        +classModifier.value !== 0 ? <strong><p>{classModifier.class}: {classModifier.value}</p></strong> : ''))
                      ) : '' }
                  </strong>
                  <strong>
                    {(defense.id === 'AC' ?
                      <strong>
                        <p>Base Value: 10</p>
                        <p>Dexterity Modifier: {dexterityMod}</p>
                      </strong> : false) ||
                    (defense.id === 'Reflexes' ? <span>Dexterity Modifier: {dexterityMod}</span> : false) ||
                    (defense.id === 'Fortitude' ? <span>Constitution Modifier: {constitutionMod}</span> : false) ||
                    (defense.id === 'Will' ? <span>Wisdom Modifier: {wisdomMod}</span> : false)}
                  </strong>
                </Popover>}
            >
              <Button bsStyle="default" style={wellStyles}>
                <td width="80" style={tdRightStyle}>
                  {defense.name}:
                </td>
                <td width="40">
                  <div>
                    {(defense.id === 'AC' ? <div> {defense.initialValue + defense.totalBonus + dexterityMod} </div> : false) ||
                    (defense.id === 'Reflexes' ? <div> {defense.initialValue + defense.totalBonus + dexterityMod} </div> : false) ||
                    (defense.id === 'Fortitude' ? <div> {defense.initialValue + defense.totalBonus + constitutionMod} </div> : false) ||
                    (defense.id === 'Will' ? <div> {defense.initialValue + defense.totalBonus + wisdomMod} </div> : <div />)}
                  </div>
                </td>
              </Button>
            </OverlayTrigger>
            <br />
          </tr></table>
          ))}
      </div>
    );
  }
}

Defenses.propTypes = {
  defenses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    totalBonus: PropTypes.number,
    initialValue: PropTypes.number,
  })).isRequired,
  dexterityMod: PropTypes.string.isRequired,
  constitutionMod: PropTypes.string.isRequired,
  wisdomMod: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Defenses;

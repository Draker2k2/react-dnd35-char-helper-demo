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
                  <br />
                  <strong>Defense Initial Value: {defense.initialValue}</strong><br />
                  <strong>Defense Inherent Value: {defense.inherentValue}</strong><br />
                  <strong>Defense Enhancement Value: {defense.enhancementValue}</strong><br />
                  <strong>Defense Ability Modifier:
                    {(defense.id === 'AC' ? <span>{dexterityMod}</span> : false) ||
                    (defense.id === 'Reflexes' ? <span>{dexterityMod}</span> : false) ||
                    (defense.id === 'Fortitude' ? <span>{constitutionMod}</span> : false) ||
                    (defense.id === 'Will' ? <span>{wisdomMod}</span> : false)}
                  </strong>
                </Popover>}
            >
              <Button bsStyle="primary" style={wellStyles}>
                <td width="80" style={tdRightStyle}>
                  {defense.name}:
                </td>
                <td width="40">
                  <div>
                    {(defense.id === 'AC' ? <div> {defense.initialValue + defense.inherentValue + defense.enhancementValue + dexterityMod} </div> : false) ||
                    (defense.id === 'Reflexes' ? <div> {defense.initialValue + defense.inherentValue + defense.enhancementValue + dexterityMod} </div> : false) ||
                    (defense.id === 'Fortitude' ? <div> {defense.initialValue + defense.inherentValue + defense.enhancementValue + constitutionMod} </div> : false) ||
                    (defense.id === 'Will' ? <div> {defense.initialValue + defense.inherentValue + defense.enhancementValue + wisdomMod} </div> : <div />)}
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
    initialValue: PropTypes.number,
    inherentValue: PropTypes.number,
    enhancementValue: PropTypes.number,
  })).isRequired,
  dexterityMod: PropTypes.string.isRequired,
  constitutionMod: PropTypes.string.isRequired,
  wisdomMod: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Defenses;

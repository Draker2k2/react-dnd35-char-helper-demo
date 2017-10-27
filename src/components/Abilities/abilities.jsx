import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const tdRightStyle = { 'text-align': 'right' };
const wellStyles = { width: 150 };
const modStyles = { width: 70 };

class Abilities extends Component {
  componentDidMount() {
    this.props.getData();
  }
  changeValueForLevelXX(e) {
    const index = e.nativeEvent.target.selectedIndex;
    this.props.changeValueForLevelXX(e.target[index].text, +e.target.value);
  }
  render() {
    const { abilities, constitutionMod, dexterityMod, strenghMod,
      intelligenceMod, charismaMod, wisdomMod } = this.props;

    return (
      this.props.skillsMods(constitutionMod, dexterityMod, strenghMod,
      intelligenceMod, charismaMod, wisdomMod),
      this.props.damageExtraStaticBonus(false, 'Dexterity', this.props.dexterityMod),
      this.props.damageExtraStaticBonus(false, 'Intelligence', this.props.intelligenceMod),
        <div>
          <table><tr><td>
            {abilities.length > 0 && abilities.map(ability => (
              <table><tr>
                <OverlayTrigger
                  trigger="focus"
                  placement="right"
                  overlay={
                    <Popover id="popover-trigger-focus" title="Popover left">
                      <strong>{ability.initialValue} from Initial Value</strong><br />
                      <strong>
                        {ability.levelValue[0] > 0 ? <p>{ability.levelValue[0]} from level 4</p> : false}
                        {ability.levelValue[1] > 0 ? <p>{ability.levelValue[1]} from level 8</p> : false}
                        {ability.levelValue[2] > 0 ? <p>{ability.levelValue[2]} from level 12</p> : false}
                      </strong>
                      <strong>
                        {ability.bonuses.map(bonus =>
                          (bonus.value > 0 ? <p>{bonus.value} from {bonus.type} bonus</p> : false),
                        )}
                      </strong>
                    </Popover>}
                >
                  <Button bsStyle="default" style={wellStyles}>
                    <td width="90" style={tdRightStyle}>{ability.name}: &nbsp;&nbsp;</td>
                    <td width="20"> &nbsp;&nbsp;{ability.initialValue + ability.totalBonus}</td>
                  </Button>
                </OverlayTrigger>
              </tr></table>
              ))}
          </td>
            <td>
              &nbsp;&nbsp;
            </td>
            <td>
              <Button bsStyle="success" style={modStyles}>Mod: {constitutionMod} </Button>
              <br />
              <Button bsStyle="success" style={modStyles}>Mod: {dexterityMod} </Button>
              <br />
              <Button bsStyle="success" style={modStyles}>Mod: {strenghMod} </Button>
              <br />
              <Button bsStyle="success" style={modStyles}>Mod: {wisdomMod} </Button>
              <br />
              <Button bsStyle="success" style={modStyles}>Mod: {intelligenceMod} </Button>
              <br />
              <Button bsStyle="success" style={modStyles}>Mod: {charismaMod} </Button>
            </td>
          </tr></table>
          <table><tr><td>
            <hr />
            <FormGroup bsSize="small" controlId="formControlsSelect">
              <ControlLabel>Choose abilities to increment per level.</ControlLabel><br />
              <ControlLabel>Level 4</ControlLabel>
              <FormControl bsSize="large" componentClass="select" placeholder="select" onChange={e => this.changeValueForLevelXX(e)}>
                <option key="void" value={0}>-</option>
                {abilities.length > 0 && abilities.map(ability => (
                  <option key={ability.name} value={0}>{ability.name}</option>
                ))}
              </FormControl>

              <ControlLabel>Level 8</ControlLabel>
              <FormControl bsSize="large" componentClass="select" placeholder="select" onChange={e => this.changeValueForLevelXX(e)}>
                <option key="void" value={1}>-</option>
                {abilities.length > 0 && abilities.map(ability => (
                  <option key={ability.name} value={1}>{ability.name}</option>
                ))}
              </FormControl>

              <ControlLabel>Level 12</ControlLabel>
              <FormControl bsSize="large" componentClass="select" placeholder="select" onChange={e => this.changeValueForLevelXX(e)}>
                <option key="void" value={2}>-</option>
                {abilities.length > 0 && abilities.map(ability => (
                  <option key={ability.name} value={2}>{ability.name}</option>
                ))}
              </FormControl>
            </FormGroup>
          </td></tr></table>
        </div>
    );
  }
}

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    initialValue: PropTypes.number,
    levelValue: [
      0, 0, 0,
    ],
    totalBonus: PropTypes.number,
  })).isRequired,
  constitutionMod: PropTypes.number.isRequired,
  dexterityMod: PropTypes.number.isRequired,
  strenghMod: PropTypes.number.isRequired,
  wisdomMod: PropTypes.number.isRequired,
  intelligenceMod: PropTypes.number.isRequired,
  charismaMod: PropTypes.number.isRequired,
  changeValueForLevelXX: PropTypes.func.isRequired,
  damageExtraStaticBonus: PropTypes.func.isRequired,
  skillsMods: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Abilities;

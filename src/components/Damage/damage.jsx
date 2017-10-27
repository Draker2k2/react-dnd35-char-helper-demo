import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, OverlayTrigger, Popover, Well } from 'react-bootstrap';

class Damage extends Component {
  componentDidMount() {}
  render() {
    const { damage } = this.props;
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Static Damage</th>
              <th>Dices</th>
              <th>Sneak</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal</td>
              <td>
                <tr>
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={
                      <Popover id="popover-trigger-hover" title="Static Damage Detail">
                        <Well bsSize="small">
                          { damage.staticBonuses.map(staticBonus => (
                            staticBonus.type === 'Dexterity' ?
                              damage.shadowHandStance === true ? <p>{staticBonus.value} from {staticBonus.from}</p> : false
                              : staticBonus.value > 0 ? <p>{staticBonus.value} from {staticBonus.from}</p> : false
                          ))}
                        </Well>
                      </Popover>}
                  >
                    <Well bsSize="small">
                      {damage.totalStaticBonus}
                    </Well>
                  </OverlayTrigger>
                </tr>
              </td>
              <td>
                <table>
                  <tr>
                    <OverlayTrigger
                      trigger="hover"
                      placement="right"
                      overlay={
                        <Popover id="popover-trigger-hover" title="Numer of d6 Detail">
                          <Well bsSize="small">
                            { damage.dicesBonuses.map(diceBonus => (
                              diceBonus.value > 0 ? <p>{diceBonus.value} from {diceBonus.from}</p> : false
                            )) }
                          </Well>
                        </Popover>}
                    >
                      <Well bsSize="small">
                        {damage.totalDicesBonus}d6
                      </Well>
                    </OverlayTrigger>
                  </tr>
                </table>
              </td>
              <td>
                <table>
                  <tr>
                    <OverlayTrigger
                      trigger="hover"
                      placement="right"
                      overlay={
                        <Popover id="popover-trigger-hover" title="Number of Sneak d6 Detail">
                          <Well bsSize="small">
                            <p>3 Dices from Rogue/Swashbukler.</p>
                            <p>1 Dice from Bayushi Deceiver.</p>
                            <p>1 Dice from Rogue Vest Item.</p>
                          </Well>
                        </Popover>}
                    >
                      <Well bsSize="small">
                        5d6
                      </Well>
                    </OverlayTrigger>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>vs Undead</td>
              <td>
                <tr>
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={
                      <Popover id="popover-trigger-hover" title="Static Damage Detail vs Undead">
                        <Well bsSize="small">
                          <p>{damage.staticUndeadModifier} from ShortSword +1 (Bane)</p>
                          { damage.staticBonuses.map(staticBonus => (
                            staticBonus.type === 'Dexterity' ?
                              damage.shadowHandStance === true ? <p>{staticBonus.value} from {staticBonus.from}</p> : false
                              : staticBonus.value > 0 ? <p>{staticBonus.value} from {staticBonus.from}</p> : false
                          ))}
                        </Well>
                      </Popover>}
                  >
                    <Well bsSize="small">
                      {damage.totalStaticBonus + damage.staticUndeadModifier}
                    </Well>
                  </OverlayTrigger>
                </tr>
              </td>
              <td>
                <table>
                  <tr>
                    <OverlayTrigger
                      trigger="hover"
                      placement="right"
                      overlay={
                        <Popover id="popover-trigger-hover" title="Numer of d6 Detail vs Undead">
                          <Well bsSize="small">
                            <p>{damage.undeadDicesBonus}d6 from ShortSword +1 Bane(2d6) and Crystal(1d6)</p>
                            { damage.dicesBonuses.map(diceBonus => (
                              diceBonus.value > 0 ? <p>{diceBonus.value} from {diceBonus.from}</p> : false
                            )) }
                          </Well>
                        </Popover>}
                    >
                      <Well bsSize="small">
                        {damage.totalDicesBonus + damage.undeadDicesBonus}d6
                      </Well>
                    </OverlayTrigger>
                  </tr>
                </table>
              </td>
              <td>
                <table>
                  <tr>
                    <OverlayTrigger
                      trigger="hover"
                      placement="right"
                      overlay={
                        <Popover id="popover-trigger-hover" title="Number of Sneak d6 Detail">
                          <Well bsSize="small">
                            <p>3 Dices from Rogue/Swashbukler.</p>
                            <p>1 Dice from Bayushi Deceiver.</p>
                            <p>1 Dice from Rogue Vest Item.</p>
                          </Well>
                        </Popover>}
                    >
                      <Well bsSize="small">
                        5d6
                      </Well>
                    </OverlayTrigger>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

Damage.propTypes = {
  damage: PropTypes.arrayOf(PropTypes.shape({
    staticBonuses: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired }).isRequired),
    dicesBonuses: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired }).isRequired),
    shadowHandStance: PropTypes.bool.isRequired,
    totalStaticBonus: PropTypes.number.isRequired,
    totalDicesBonus: PropTypes.number.isRequired,
    staticUndeadModifier: PropTypes.number.isRequired,
    undeadDicesBonus: PropTypes.number.isRequired,
  })).isRequired,
};


export default Damage;

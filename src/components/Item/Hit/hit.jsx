import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Well, Table, OverlayTrigger, Popover } from 'react-bootstrap';

class Hit extends Component {
  componentDidMount() {}
  render() {
    const { dexterityMod, hit } = this.props;
    const maxHit = dexterityMod + hit.totalBonus_w1;
    return (
      <div>
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Popover id="popover-trigger-hover" title="Single Attack Hit Detail">
              <Well>
                <strong><p>{hit.bab} from total BAB</p></strong>
                <strong><p>{dexterityMod} from Dexterity Mod</p></strong>
                { hit.bonuses.map(bonus => (
                  (bonus.value > 0 ? <strong><p>{bonus.value} from {bonus.type}</p></strong> : false)
                )) }
              </Well>
            </Popover>}
        >
          <Well bsSize="small">Normal SINGLE attack: {dexterityMod + hit.totalBonus_w1 }</Well>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Popover id="popover-trigger-hover" title="Single Attack Hit Detail vs Undead">
              <Well>
                <strong><p>{hit.bab} from total BAB</p></strong>
                <strong><p>{dexterityMod} from Dexterity Mod</p></strong>
                <strong><p>{hit.undeadModifier_w1} from ShortSword +1 (Bane)</p></strong>
                { hit.bonuses.map(bonus => (
                  (bonus.value > 0 ? <strong><p>{bonus.value} from {bonus.type}</p></strong> : false)
                )) }
              </Well>
            </Popover>}
        >
          <Well bsSize="small">vs Undead SINGLE attack: {dexterityMod + hit.totalBonus_w1 + hit.undeadModifier_w1 }</Well>
        </OverlayTrigger>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>DualWield TWF</th>
              <th>1rst Attack</th>
              <th>2on Attack</th>
              <th>3rd Attack</th>
              <th>4th Attack</th>
              <th>5th Attack</th>
              <th>6th Attack</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <OverlayTrigger
                trigger="hover"
                placement="right"
                overlay={
                  <Popover id="popover-trigger-hover" title="Hit detail">
                    <Well>
                      <strong><p>Penalty from DualWield:</p></strong>
                      <p>&nbsp;&nbsp;&nbsp;# -2 (1rst/2nd)</p>
                      <p>&nbsp;&nbsp;&nbsp;# -7 (3rd/4th)</p>
                      <p>&nbsp;&nbsp;&nbsp;# -12 (5th/6th)</p>
                      <strong><p>{hit.bab} from total BAB</p></strong>
                      <strong><p>{dexterityMod} from Dexterity Mod</p></strong>
                      { hit.bonuses.map(bonus => (
                        (bonus.value > 0 ? <strong><p>{bonus.value} from {bonus.type}</p></strong> : false)
                      )) }
                    </Well>
                  </Popover>}
              >
                <td>Normal</td>
              </OverlayTrigger>
              <td>{maxHit - 2}</td>
              <td>{maxHit - 2}</td>
              <td>{maxHit - 7}</td>
              <td>{maxHit - 7}</td>
              <td>{maxHit - 12}</td>
              <td>{maxHit - 12}</td>
            </tr>
            <tr>
              <OverlayTrigger
                trigger="hover"
                placement="right"
                overlay={
                  <Popover id="popover-trigger-hover" title="Hit detail">
                    <Well>
                      <strong><p>Penalty from DualWield:</p></strong>
                      <p>&nbsp;&nbsp;&nbsp;# -2 (1rst/2nd)</p>
                      <p>&nbsp;&nbsp;&nbsp;# -7 (3rd/4th)</p>
                      <p>&nbsp;&nbsp;&nbsp;# -12 (5th/6th)</p>
                      <strong><p>{hit.bab} from total BAB</p></strong>
                      <strong><p>{dexterityMod} from Dexterity Mod</p></strong>
                      <strong><p>{hit.undeadModifier_w1} from ShortSword +1 (Bane)</p></strong>
                      { hit.bonuses.map(bonus => (
                        (bonus.value > 0 ? <strong><p>{bonus.value} from {bonus.type}</p></strong> : false)
                      )) }
                    </Well>
                  </Popover>}
              >
                <td>vs Undead</td>
              </OverlayTrigger>
              <td>{(maxHit - 2) + hit.undeadModifier_w1}</td>
              <td>{(maxHit - 2) + hit.undeadModifier_w1}</td>
              <td>{(maxHit - 7) + hit.undeadModifier_w1}</td>
              <td>{(maxHit - 7) + hit.undeadModifier_w1}</td>
              <td>{(maxHit - 12) + hit.undeadModifier_w1}</td>
              <td>{(maxHit - 12) + hit.undeadModifier_w1}</td>
            </tr>
          </tbody>
        </Table>

        { hit.haveExtraAttacks === true ?
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                { hit.extraAttacks.map(attack => (attack.from !== undefined ?
                  <th>
                    ADDITIONAL attack from: {attack.from} (1)
                  </th>
                : false))}
              </tr>
            </thead>
            <tbody>
              <tr>
                { hit.extraAttacks.map(attack => (attack.hitValue > 0 ?
                  <td>
                    <p>vs Normal Attack: { attack.hitValue === 1 ? maxHit : attack.hitValue}</p>
                    <p>vs Undead Attack: { attack.hitValue === 1 ? maxHit + hit.undeadModifier_w1 : attack.hitValue}</p>
                  </td>
                : false))}
              </tr>
            </tbody>
          </Table>
        : false }
      </div>
    );
  }
}

Hit.propTypes = {
  dexterityMod: PropTypes.number.isRequired,
  hit: PropTypes.arrayOf(PropTypes.shape({
    totalBonus_w1: PropTypes.number.isRequired,
    undeadModifier_w1: PropTypes.number.isRequired,
    haveExtraAttacks: PropTypes.number.isRequired,
    bonuses: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
    extraAttacks: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.string.isRequired,
      hitValue: PropTypes.number.isRequired }).isRequired),
  })).isRequired,
};

export default Hit;

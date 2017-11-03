import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Row, Col, Nav, NavItem, Panel, Label } from 'react-bootstrap';

class Maneuver extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.maneuverToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Abilities' ? this.props.abilityIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Skills' ? this.props.skillIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.subTarget === 'Hit' ? this.props.hitIncrement(checked, bonus.type, bonus.value) : '') ||
      (bonus.subTarget === 'Rolls' && checked === false ? this.props.hitExtraAttack(name, bonus.value) : '') ||
      (bonus.subTarget === 'Rolls' && checked === true ? this.props.removeExtraAttack(name, bonus.value) : '') ||
      (bonus.target === 'Damage' && bonus.subTarget !== 'Dices' ? this.props.damageExtraStaticBonus(checked, name, bonus.value) : '') ||
      (bonus.target === 'Damage' && bonus.subTarget === 'Dices' ? this.props.damageExtraDicesBonus(checked, name, bonus.value) : '')
    ));
  }
  render() {
    const { maneuvers } = this.props;

    return (
      <div>
        <Panel collapsible header="Boosts" bsStyle="success" defaultExpanded="true">
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.action === 'boost')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onClick={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    <Label bsSize="xsmall" bsStyle="info">SwordSage</Label> <Label bsStyle="danger">{maneuver.checked ? ' MANUEVER ACTIVE ' : false}</Label>
                    <h4>{maneuver.name}</h4>
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col sm={4}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    {maneuver.description}
                  </Tab.Pane>
                 ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Panel>

        <Panel collapsible header="Strikes" bsStyle="danger" defaultExpanded="true">
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.action === 'strike')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onSelect={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.name}
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col sm={4}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    {maneuver.description}
                  </Tab.Pane>
                 ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Panel>

        <Panel collapsible header="Counters" bsStyle="warning" defaultExpanded="true">
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.action === 'counter')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onSelect={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.name}
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col sm={4}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    {maneuver.description}
                  </Tab.Pane>
                 ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Panel>
      </div>
    );
  }
}

Maneuver.propTypes = {
  maneuvers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
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
  maneuverToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Maneuver;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Row, Col, Nav, NavItem, Panel, Label, Glyphicon } from 'react-bootstrap';
import RichTextEditor from 'react-rte';

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
            <Col  xs={2} sm={2} md={4}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.type === 'Boost')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onClick={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.class === 'SwordSage' ? <Label bsSize="xsmall" bsStyle="info">SwordSage</Label> : false}
                    {maneuver.class === 'WarBlade' ? <Label bsSize="xsmall" bsStyle="success">WarBlade</Label> : false}
                    {maneuver.class === 'Crusader' ? <Label bsSize="xsmall" bsStyle="warning">Crusader</Label> : false}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Label bsStyle="danger">{maneuver.checked ? <Glyphicon glyph="check" /> : false}{maneuver.checked ? ' ACTIVE' : false}</Label>
                    <h4>{maneuver.name}</h4>
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col xs={4} sm={4} md={6}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    <Label bsSize="xsmall" bsStyle="success">{maneuver.action} Action</Label>&nbsp;
                    <Label bsSize="xsmall" bsStyle="warning">{maneuver.discipline}</Label>
                    <RichTextEditor
                    readOnly="true"
                    value={RichTextEditor.createValueFromString(maneuver.description, 'html')}
                    />
                  </Tab.Pane>
                 ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Panel>

        <Panel collapsible header="Strikes" bsStyle="danger">
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col xs={2} sm={2} md={4}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.type === 'Strike')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onClick={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.class === 'SwordSage' ? <Label bsSize="xsmall" bsStyle="info">SwordSage</Label> : false}
                    {maneuver.class === 'WarBlade' ? <Label bsSize="xsmall" bsStyle="success">WarBlade</Label> : false}
                    {maneuver.class === 'Crusader' ? <Label bsSize="xsmall" bsStyle="warning">Crusader</Label> : false}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Label bsStyle="danger">{maneuver.checked ? <Glyphicon glyph="check" /> : false}{maneuver.checked ? ' ACTIVE' : false}</Label>
                    <h4>{maneuver.name}</h4>
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col xs={2} sm={4} md={6}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    <Label bsSize="xsmall" bsStyle="success">{maneuver.action} Action</Label>&nbsp;
                    <Label bsSize="xsmall" bsStyle="warning">{maneuver.discipline}</Label>
                    <RichTextEditor
                    readOnly="true"
                    value={RichTextEditor.createValueFromString(maneuver.description, 'html')}
                    />
                  </Tab.Pane>
                 ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Panel>

        <Panel collapsible header="Counters" bsStyle="warning">
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col xs={2} sm={2} md={4}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.filter(maneuv => (maneuv.type === 'Counter')).map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onClick={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.class === 'SwordSage' ? <Label bsSize="xsmall" bsStyle="info">SwordSage</Label> : false}
                    {maneuver.class === 'WarBlade' ? <Label bsSize="xsmall" bsStyle="success">WarBlade</Label> : false}
                    {maneuver.class === 'Crusader' ? <Label bsSize="xsmall" bsStyle="warning">Crusader</Label> : false}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Label bsStyle="danger">{maneuver.checked ? <Glyphicon glyph="check" /> : false}{maneuver.checked ? ' ACTIVE' : false}</Label>
                    <h4>{maneuver.name}</h4>
                  </NavItem>
                 ))}
              </Nav>
            </Col>
            <Col  xs={4} sm={4} md={6}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    <Label bsSize="xsmall" bsStyle="success">{maneuver.action} Action</Label>&nbsp;
                    <Label bsSize="xsmall" bsStyle="warning">{maneuver.discipline}</Label>
                    <RichTextEditor
                    readOnly="true"
                    value={RichTextEditor.createValueFromString(maneuver.description, 'html')}
                    />
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

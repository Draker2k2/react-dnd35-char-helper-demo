import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class Maneuver extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.maneuverToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Abilities' ? this.props.abilityIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.target === 'Skills' ? this.props.skillIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '')
    ));
  }
  render() {
    const { maneuvers } = this.props;

    return (
      <div>
        <Tab.Container id="maneuvers-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={4}>
              <Nav bsStyle="pills" stacked>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <NavItem eventKey={maneuver.id} checked={maneuver.checked} onClick={e => this.toggleIncrementFun(e, maneuver.name, maneuver.checked, maneuver.bonuses)}>
                    {maneuver.name}
                  </NavItem>
                 ))};
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>
                 {maneuvers.length > 0 && maneuvers.map(maneuver => (
                  <Tab.Pane eventKey={maneuver.id}>
                    {maneuver.name}
                  </Tab.Pane>
                 ))};
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
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
  maneuverToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Maneuver;

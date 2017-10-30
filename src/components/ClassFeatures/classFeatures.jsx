import React, { Component } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const wellStyles = { width: 250 };

class ClassFeatures extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.classFeatureToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '') ||
      (bonus.subTarget === 'Hit' ? this.props.hitIncrement(checked, bonus.type, bonus.value) : '')
    ));
  }
  render() {
    const { classFeatures } = this.props;
    return (
      <div>
        {classFeatures.length > 0 && classFeatures.map(classFeature => (
          <OverlayTrigger
            trigger="hover"
            placement="left"
            overlay={
              <Popover id="popover-trigger-hover" title={classFeature.name} >
                <p>{classFeature.description}</p><br />
                { classFeature.bonuses.map(bonus => (
                  <p><strong>{bonus.value} {bonus.type} bonus to {bonus.subTarget}</strong></p>
                  ))}
              </Popover>}
          >
            <p><Button bsStyle="danger" style={wellStyles} active={classFeature.checked} onClick={e => this.toggleIncrementFun(e, classFeature.name, classFeature.checked, classFeature.bonuses)}>
              <div>
                {classFeature.name}
              </div>
            </Button></p>
          </OverlayTrigger>
        ))}
      </div>
    );
  }
}

ClassFeatures.propTypes = {
  classFeatures: PropTypes.arrayOf(PropTypes.shape({
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
  defenseIncrement: PropTypes.func.isRequired,
  hitIncrement: PropTypes.func.isRequired,
  classFeatureToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default ClassFeatures;

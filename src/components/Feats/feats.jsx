import React, { Component } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const wellStyles = { width: 250 };

class Feats extends Component {
  componentDidMount() {
    this.props.getData();
  }
  toggleIncrementFun(e, name, checked, bonuses) {
    this.props.featToggle(name);
    bonuses.map(bonus => (
      (bonus.target === 'Defenses' ? this.props.defenseIncrement(checked, bonus.subTarget, bonus.type, bonus.value) : '')
    ));
  }
  render() {
    const { feats } = this.props;
    return (
      <div>
        {feats.length > 0 && feats.map(feat => (
          <OverlayTrigger
            trigger="hover"
            placement="right"
            overlay={
              <Popover id="popover-trigger-hover" title={feat.name} >
                <p>{feat.description}</p><br />
                { feat.bonuses.map(bonus => (
                  <p><strong>{bonus.value} {bonus.type} bonus to {bonus.subTarget}</strong></p>
                  ))}
              </Popover>}
          >
            <p><Button bsStyle="danger" style={wellStyles} active={feat.checked} onClick={e => this.toggleIncrementFun(e, feat.name, feat.checked, feat.bonuses)}>
              <div>
                {feat.name}
              </div>
            </Button></p>
          </OverlayTrigger>
        ))}
      </div>
    );
  }
}

Feats.propTypes = {
  feats: PropTypes.arrayOf(PropTypes.shape({
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
  featToggle: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

export default Feats;

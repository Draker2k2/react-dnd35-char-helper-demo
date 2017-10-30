import React, { Component } from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const tdRightStyle = { 'text-align': 'right' };
const wellStyles = { width: 190 };

class Skills extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { skills } = this.props;

    return (
      <div>
        <table><tr>
          {skills.length > 0 && skills.map(skill => (
            <OverlayTrigger
              trigger="focus"
              placement="right"
              overlay={
                <Popover id="popover-trigger-focus" title="Popover left">
                  <p><strong>Skill Ranks: {skill.ranks}</strong></p> {(skill.bonuses.map(bonus => (
                    (bonus.value !== 0 ? <strong><p>{bonus.type} bonus: {bonus.value}</p></strong> : '')
                  )))}
                  <p><strong>Ability Modifier: {skill.keyAbility}</strong></p>
                  <p><strong>Sinergy Bonus: {skill.sinergyBonus}</strong></p>
                </Popover>}
            >
              <Button bsStyle="default" style={wellStyles}>
                <td width="150" style={tdRightStyle}>{skill.name}: &nbsp;&nbsp;</td>
                <td width="20"> &nbsp;&nbsp;{+skill.ranks + (skill.totalBonus > 0 ? +skill.totalBonus : 0)}</td>
              </Button>
            </OverlayTrigger>
            ))}
        </tr></table>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  getData: PropTypes.func.isRequired,
};

export default Skills;

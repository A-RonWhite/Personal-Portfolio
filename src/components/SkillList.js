import React from 'react';
import Skill from './Skill';
import Skills from '../skill-list';

class SkillList extends React.Component {
  render() {
    /*     const Skill = props => <img src={props.test} alt="" />;
     */ console.log(Skills);
    return (
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-list">
          <Skill test="thtfdd" />
          <Skill test="test2" />
          <Skill SkillImage={Skills.skill1.image} />
        </div>
      </div>
    );
  }
}

export default SkillList;

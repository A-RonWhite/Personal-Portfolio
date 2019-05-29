import React from 'react';
/* import Skill from './Skill'; */
import skills from '../skill-list';

class SkillList extends React.Component {
  render() {
    const Skill = props => <img src={props.skillImage} alt="" />;
    console.log(skills);
    return (
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-list">
          <Skill test="thtfdd" />
          <Skill test="test2" />
          <Skill skillImage={skills.skill1.image} />
        </div>
      </div>
    );
  }
}

export default SkillList;

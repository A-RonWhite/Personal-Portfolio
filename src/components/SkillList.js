import React from 'react';
import Skill from './Skill';
import skills from '../skill-list';
import bgTest from '../images/skills-bg.svg';

class SkillList extends React.Component {
  state = {
    skills,
  };

  render() {
    console.log(skills);
    return (
      <div className="skills">
        <img src={bgTest} alt="" className="bg-cover" />
        <h3 className="container">Skills</h3>
        <div className="skill-list container">
          {this.state.skills.map(skill => (
            <Skill skill={skill} />
          ))}
        </div>
      </div>
    );
  }
}

export default SkillList;

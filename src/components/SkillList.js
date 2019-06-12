import React from 'react';
import Skill from './Skill';
import skills from '../skill-list';
import bgTest from '../images/svg-bgs/skill-bg.svg';

class SkillList extends React.Component {
  state = {
    skills,
  };

  render() {
    console.log(skills);
    return (
      <div className="skills">
        {/*         <img src={bgTest} alt="" className="bg-cover" /> */}
        <h3 className="container">Core Development Technologies</h3>
        <div className="skill-list container">
          {this.state.skills.map(skill => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </div>
        <p>
          Please refer to my CV for a full list, including any design programs.
        </p>
      </div>
    );
  }
}

export default SkillList;

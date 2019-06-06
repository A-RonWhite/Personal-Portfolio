import React from 'react';
import Skill from './Skill';
import skills from '../skill-list';

class SkillList extends React.Component {
  render() {
    console.log(skills);
    return (
      <div className="skills">
        <h3>Skills</h3>
        {/* Redo the way this works so that it's DRY */}
        <div className="skill-list">
          <Skill
            skillImage={skills.skill1.image}
            skillName={skills.skill1.name}
          />
          <Skill
            skillImage={skills.skill2.image}
            skillName={skills.skill2.name}
          />
          <Skill
            skillImage={skills.skill3.image}
            skillName={skills.skill3.name}
          />
          <Skill
            skillImage={skills.skill4.image}
            skillName={skills.skill4.name}
          />
          <Skill
            skillImage={skills.skill1.image}
            skillName={skills.skill1.name}
          />
          <Skill
            skillImage={skills.skill2.image}
            skillName={skills.skill2.name}
          />
          <Skill
            skillImage={skills.skill3.image}
            skillName={skills.skill3.name}
          />
          <Skill
            skillImage={skills.skill4.image}
            skillName={skills.skill4.name}
          />
        </div>
        <span className="foreground-bg" />
        <span className="background-bg" />
      </div>
    );
  }
}

export default SkillList;

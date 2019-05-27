import React from 'react';

const Skill = props => (
  <div className="skill">
    <img src={props.SkillImage} alt="" />
    <p>{props.SkillName}</p>
  </div>
);
export default Skill;

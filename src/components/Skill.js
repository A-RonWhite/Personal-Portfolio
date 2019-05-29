import React from 'react';

const Skill = props => {
  const { skillImage, skillName } = props;
  return (
    <div className="skill">
      <img src={skillImage} alt="" />
      <p>{skillName}</p>
    </div>
  );
};
export default Skill;

import React from 'react';

const Skill = props => {
  const { image, name } = props.skill;
  return (
    <div className="skill">
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};
export default Skill;

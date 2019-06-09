import React from 'react';

const Skill = props => {
  const { image, name } = props.skill;
  return (
    <div className="skill">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};
export default Skill;

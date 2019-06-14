import React from 'react';
import Skill from './Skill';
import skills from '../skill-list';

class SkillList extends React.Component {
  state = {
    skills,
  };

  render() {
    console.log(skills);
    return (
      <div className="skills">
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1921 243.22"
        >
          <path
            d="M0,225s125,41,476,0S1194,86,1194,86s336-76,598-78c0,0,47-2,129,0V0H1Z"
            fill="#fffdfd"
          />
        </svg>

        <h3 className="container">Core Development Technologies</h3>
        <div className="skill-list container">
          {this.state.skills.map(skill => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </div>
        <p>
          Please refer to my CV for a full list, including any design programs.
        </p>
        <svg
          id="bottom-wave"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1921 176.22"
        >
          <title>Untitled-1</title>
          <rect width="1921" height="176" fill="#404d53" />
          <path
            d="M0,13.2s125-29.7,476,0,718,100.71,718,100.71,336,55.07,598,56.52c0,0,47,1.45,129,0v5.79H1Z"
            fill="#fff"
          />
        </svg>
      </div>
    );
  }
}

export default SkillList;

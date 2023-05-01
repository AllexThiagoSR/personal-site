import React from 'react';

function SkillsList() {
  const skills = ['JavaScript ES6', 'HTML', 'CSS', 'React', 'Jest', 'RTL'];
  return (
    <ul className="skills-list">
      {
        skills.map((skill, index) => (
          <li key={ `${index + 1}ª Skill` }>{ skill }</li>
        ))
      }
    </ul>
  );
}

export default SkillsList;

import React from 'react';

function SkillsList() {
  const skills = [
    'JavaScript/TypeScript',
    'React',
    'Mocha/Chai/Sinon',
    'Node.js',
    'Docker/Docker Compose',
    'Next.js',
    'Express',
    'Sequelize',
    'Prisma',
    'MySQL'
  ];
  return (
    <div className="skills-wrapper">
      <p>Algumas das tecnologias que tenho trabalhado:</p>
      <ul className="skills-list">
        {
          skills.map((skill, index) => (
            <li key={ `${index + 1}ª Skill` }>{ skill }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default SkillsList;

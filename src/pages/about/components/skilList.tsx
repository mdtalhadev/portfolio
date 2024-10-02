import React from "react";

interface SkillListProps {
  title: string;
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

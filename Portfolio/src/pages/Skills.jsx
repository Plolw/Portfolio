import React, { useState } from 'react';
import SkillsTopBar from '../components/SkillsTopBar';
import SkillList from '../components/SkillList';

const Skills = () => {
    const skillsData = {
        Web: [{ "Angular": 60 }, { "SQLite3": 80 }, { "MySQL": 65 }, { "Flask": 60 }, { "Django": 85 }, { "React": 80 }, { "NextJs": 75 }, { "Tailwind": 70 }, { "Bootstrap": 45 }],
        Game: [{ "Unity": 60 }, { "C++": 45 }, { "C#": 70 }, { "UnrealEngine3": 40 }],
        Design: [{ "Photoshop": 60 }, { "Figma": 65 }, { "UX/UI": 70 }],
        Data: [{ "R": 70 }, { "Python": 80 }, { "NumPy": 90 }, { "Pandas": 90 }, { "TidyVerse": 70 }, { "Statistics": 85 }, { "Mathematics": 85 }],
    };

    const [selectedCategory, setSelectedCategory] = useState('Web');
    const selectedSkills = skillsData[selectedCategory];

    return (
        <div className='flex flex-col gap-20'>
            <SkillsTopBar
                skills={skillsData}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <SkillList list={selectedSkills} />
        </div>
    );
};

export default Skills;
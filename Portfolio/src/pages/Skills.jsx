import React, { useState } from 'react';
import SkillsTopBar from '../components/SkillsTopBar';
import SkillList from '../components/SkillList';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
    const skillsData = {
        Web: [{ "Angular": 65 }, { "SQLite3": 80 }, { "MySQL": 65 }, { "Flask": 60 }, { "Django": 85 }, { "React": 80 }, { "NextJs": 75 }, { "Tailwind": 70 }, { "Chart.js": 80 }],
        Game: [{ "Unity": 60 }, { "C++": 45 }, { "C#": 70 }, { "Unreal Engine 4": 40 }],
        Design: [{ "Photoshop": 60 }, { "Figma": 65 }, { "UX/UI": 70 }, { "3ds Max": 45 }, { "Blender": 30 }],
        Data: [{ "R": 70 }, { "Python": 80 }, { "NumPy": 90 }, { "Pandas": 90 }, { "TidyVerse": 70 }, { "Statistics": 85 }, { "Maths": 85 }, { "SQLite3": 80 }, { "MySQL": 65 }],
    };

    const [selectedCategory, setSelectedCategory] = useState('Web');
    const selectedSkills = skillsData[selectedCategory];

    return (
        <div className='flex flex-col min-h-[80vh]'>
            <SectionTitle text={"Skills"} />
            <div className='flex flex-col gap-6 2xl:gap-8'>
                <SkillsTopBar
                    skills={skillsData}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <SkillList list={selectedSkills} />
            </div>
        </div>
    );
};

export default Skills;
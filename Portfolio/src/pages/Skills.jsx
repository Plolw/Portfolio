import React, { useState } from 'react';
import SkillsTopBar from '../components/SkillsTopBar';
import SkillList from '../components/SkillList';
import SectionTitle from '../components/SectionTitle';
import { skillsData } from '../info';

const Skills = () => {
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
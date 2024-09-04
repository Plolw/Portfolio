import React from "react";
import SkillImage from "./SkillImage";

const SkillList = ({ list }) => {
    return (
        <div className="flex flex-col w-full gap-3 3xl:gap-4 items-center lg:h-screen">
            <div className="hidden md:flex flex-row items-center w-full md:w-3/5">
                <p className="w-4/12 md:w-2/12 text-left"></p>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <p>0%</p>
                        <div className="text-primary text-center font-bold">|</div>
                    </div>
                    <div className="flex flex-col">
                        <p>50%</p>
                        <div className="text-primary text-center font-bold">|</div>
                    </div>
                    <div className="flex flex-col">
                        <p>100%</p>
                        <div className="text-primary text-center font-bold">|</div>
                    </div>
                </div>
            </div>
            {list.map((skill, index) => (
                <SkillImage key={index} skill={skill} />
            ))}
        </div>
    )
}

export default SkillList;
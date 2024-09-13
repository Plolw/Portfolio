import TimeLine from '../components/TimeLine';
import TimeCard from '../components/TimeCard';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { times, monthNames } from '../info';

const AboutMe = () => {
    const [currentDate, setCurrentDate] = useState(times[0]);

    return (
        <div className='flex flex-col pt-20 lg:pt-0 min-h-[100vh]'>
            <SectionTitle text={"About Me"} />
            <div className='flex flex-col h-full 3xl:pt-14 gap-10 md:gap-20 w-full'>
                <TimeCard timeData={currentDate} monthName={monthNames[currentDate.dateS.getMonth()]} monthName2={monthNames[currentDate.dateF.getMonth()]} />
                <TimeLine timesData={times} setCurrentDate={setCurrentDate} />
            </div>
        </div>
    )
}

export default AboutMe
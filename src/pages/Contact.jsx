import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Email from '../components/Email';
import Map from '../components/Map';
import Socials from '../components/Socials';

const Contact = () => {
    return (
        <div className='flex flex-col w-full mt-44 md:mt-0'>
            <SectionTitle text={"Contact"} />
            <div className='flex flex-col md:flex-row gap-10 lg:gap-20 justify-center'>
                <Email />
                <div className='flex flex-col gap-1 lg:gap-3 3xl:gap-16'>
                    <Map />
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Email from '../components/Email';
import Map from '../components/Map';
import Socials from '../components/Socials';

const Contact = () => {
    return (
        <div className='flex flex-col'>
            <SectionTitle text={"Contact"} />
            <div className='flex flex-row gap-2 lg:gap-4'>
                <Email />
                <div className='flex flex-col gap-1 lg:gap-3'>
                    <Map />
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react';
import HomeModel from '../components/HomeModel';
import HomeTitle from '../components/HomeTitle';
import HomeDesc from '../components/HomeDesc';
import DownArrow from '../components/DownArrow';

const Home = () => {
    return (
        <div className='flex flex-col w-full min-h-screen m-10 overflow-auto'>
            <HomeTitle />
            <div className='flex flex-row'>
                <div id='model_wrapper' className='w-2/5 h-[30rem]'>
                    <HomeModel />
                </div>
                <HomeDesc />
            </div>
            <DownArrow />
        </div>
    )
}

export default Home
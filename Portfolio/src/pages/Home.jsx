import React from 'react';
import HomeModel from '../components/HomeModel';
import HomeTitle from '../components/HomeTitle';
import HomeDesc from '../components/HomeDesc';
import DownArrow from '../components/DownArrow';

const Home = () => {
    return (
        <div className='flex flex-col w-full min-h-screen p-4 2xl:p-2'>
            <HomeTitle />
            <div className='flex flex-col lg:flex-row mt-12'>
                <div id='model_wrapper' className='self-center w-4/5 lg:w-2/5 h-[20rem] 2xl:h-[20rem]'>
                    <HomeModel />
                </div>
                <HomeDesc />
            </div>
            <DownArrow />
        </div>
    )
}

export default Home
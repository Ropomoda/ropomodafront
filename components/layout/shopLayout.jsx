import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import BottomTabs from '../navbar/buttomTabs';
import MainContentWrapper from '../mainContentWrapper';

function Home({ children }) {
    return (
        <div id='ropomoda-shop-layout' className='ropomoda-shop-layout relative'>
            <Header />
            <Navbar />
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
            <BottomTabs />
        </div>
    )
}

export default Home
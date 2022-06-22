import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import MainContentWrapper from '../mainContentWrapper';

function Home({ children }) {
    return (
        <div id='ropomoda-shop-layout' className='ropomoda-shop-layout'>
            <Header />
            <Navbar />
            <MainContentWrapper>
                {children}
            </MainContentWrapper>
        </div>
    )
}

export default Home
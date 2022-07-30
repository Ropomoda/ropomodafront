import React, { useEffect } from 'react'
import Header from '../header';
import Footer from '../footer';
import Navbar from '../navbar';
import BottomTabs from '../navbar/buttomTabs';
import MainContentWrapper from '../mainContentWrapper';
import Head from 'next/head';
import { getS3Image } from '../../utils/utils';
import { BackTop } from 'antd';
import { connect } from "react-redux";
import { getProfile, getUserInfo, initAccountInfo, } from '../../actions/accountAction';
import { setContentLoading } from '../../actions/contentAction';

function Home({ children, getProfile, getUserInfo, account, initAccountInfo , setContentLoading  }) {
    const { token } = account;
    const init = async () => {
        setContentLoading(true);
        try {
            await initAccountInfo();
            getProfile();
            getUserInfo();
        } catch (error) {
            console.log(error);
        }
        setContentLoading(false);
    }
    useEffect(() => {
        init();
    }, []);
    return (
        <>
            <Head>
                <title>فروشگاه اینترنتی روپومدا</title>
                {/* Seo Meta Tags */}
                <meta name="title" content="فروشگاه اینترنتی روپومدا" />
                <meta name="description" content="توضیحات" />
                <meta name="keywords" content="لباس،تیشرت،مانتو" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="revisit-after" content="7 days" />

                {/* Theme Meta Tags */}
                <meta name="theme-color" content="#F9AFEC" />
                <meta name="msapplication-navbutton-color" content="#F9AFEC" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#F9AFEC" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                {/* OG meta tags */}

                <meta property="og:title" content="فروشگاه اینترنتی روپومدا" />
                <meta property="og:site_name" content="Ropo Moda" />
                <meta property="og:url" content="ropomoda.com" />
                <meta property="og:description" content="فروشگاه اینترنتی روپومدا" />
                <meta property="og:type" content="business.business" />
                <meta property="og:image" content={getS3Image("logo-fill.png")} />

                <link rel="manifest" href="/manifest.json" />

            </Head>
            <div id='ropomoda-shop-layout' className='ropomoda-shop-layout relative pb-20 sm:pb-5'>
                <Header />
                <Navbar />
                <MainContentWrapper>
                    {children}
                </MainContentWrapper>
                <BottomTabs />
                <Footer />
            </div>
            <BackTop style={{ bottom: 100, left: "auto", right: 20, opacity: 0.8 }}>
                <div className='bg-primary rounded-3xl px-3 py-2 text-white'>
                    <i className='fal fa-arrow-up' />
                    بالا
                </div>
            </BackTop>
        </>
    )
}
const mapStateToProps = (state, ownProps) => ({
    account: state?.account,
});
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => dispatch(getProfile()),
        getUserInfo: () => dispatch(getUserInfo()),
        initAccountInfo: () => dispatch(initAccountInfo()),
        setContentLoading: (status) => dispatch(setContentLoading(status)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
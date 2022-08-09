import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { getS3Image } from '../../utils/utils';

const bannerAd = ["free delivery.png", "kharid bedone vaseteh.png"];
const Home = () => {
    return (
        <div className='block sm:hidden m-4'>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="w-full rounded-3xl"
                autoplay
            >
                {bannerAd.map((item,index)=><SwiperSlide key={index}>
                    <img src={getS3Image(item)} className='rounded-3xl h-60'/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Home;
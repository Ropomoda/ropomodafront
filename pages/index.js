import { Button, Space, DatePicker, Card } from 'antd';
import Header from '../Components/header';
import Navbar from '../Components/navbar';
import Carousel from '../Components/carousel';
import ProductItem from '../Components/productItem';
import MainContentWrapper from '../Components/mainContentWrapper';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Navbar />
      <MainContentWrapper>
        <Carousel containerClassName="pt-12 pb-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Carousel>
        <Carousel containerClassName="py-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Carousel>
        <Carousel containerClassName="py-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Carousel>
      </MainContentWrapper>
    </div>
  );
}
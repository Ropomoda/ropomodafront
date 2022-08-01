import Carousel from "react-multi-carousel";
import styles from './styles.module.scss';
import ShowMoreItems from './showMoreItems';
import CarouselHead from './carouselHead';
import "react-multi-carousel/lib/styles.css";
import ProductItem from '../productItem';
import WrapperCard from "./wrapperCard";
import { useEffect, useState } from "react";
import httpReq from "../../http_requests";
import ProductLoadingSkeleton from '../productItem/productLoadingSkeleton';

const Home = ({
  containerClassName,
  type = "light",
  showMoreItems = true,
  title,
  colorHex = null,
  badgeText = null
}) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.8,
      paritialVisibilityGutter: 0
    }
  };
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  const getCollectionData = async () => {
    setLoading(true);
    try {
      const { data = [] } = await httpReq.storeReq.getAllProducts();

      // a short sleep for loading images
      await sleep(2000);
      setProductList(data);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <div className={`${containerClassName}`}>
      <WrapperCard className={`${styles[`carousel-wrapper`]} carousel-wrapper ${styles[`carousel-wrapper--${type}`]}`} >
        <Carousel
          ssr
          partialVisible
          deviceType={"desktop"}
          responsive={responsive}
          rtl
        >
          <CarouselHead title={title} type={type} />
          {loading ? [...Array(10)].map((_, index) => <ProductLoadingSkeleton key={index} />) : productList.map((item, index) => {
            return <ProductItem key={index} type={type} productInfo={
              {
                ...item,
                collectionInfo: {
                  collectionName: badgeText || title,
                  collectionPrimaryColorHex: colorHex
                }
              }
            } />
          })}
          {showMoreItems ? <ShowMoreItems /> : null}
        </Carousel>
      </WrapperCard>
    </div>
  )
}

export default Home
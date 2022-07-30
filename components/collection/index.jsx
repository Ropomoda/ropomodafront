import Carousel from "react-multi-carousel";
import styles from './styles.module.scss';
import ShowMoreItems from './showMoreItems';
import CarouselHead from './carouselHead';
import "react-multi-carousel/lib/styles.css";
import ProductItem from '../productItem';
import WrapperCard from "./wrapperCard";
import { storeReq } from "../../http_requests/storeReq";
import { useEffect, useState } from "react";


const Home = ({
  containerClassName,
  type = "light",
  showMoreItems = true,
  title,
  colorHex = null,
  badgeText = null
}) => {
  const [productList, setProductList] = useState([]);
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
  const getCollectionData = async () => {
    try {
      const { data } = await storeReq.getAllProducts();
      const { results = [] } = data;
      setProductList(results);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    //getCollectionData();
  }, []);

  return (
    <div className={`${containerClassName}`}>
      <WrapperCard className={`carousel-wrapper ${styles[`carousel-wrapper--${type}`]}`} >
        <Carousel
          ssr
          partialVisible
          deviceType={"desktop"}
          responsive={responsive}
          rtl
        >
          <CarouselHead title={title} type={type} />
          {productList.map((item, index) => {
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
import { Card, } from "antd"
import Carousel from "react-multi-carousel";
import styles from './styles.module.scss';
import ShowMoreItems from './showMoreItems';
import CarouselHead from './carouselHead';
import "react-multi-carousel/lib/styles.css";
import ProductItem from '../productItem';


const Home = ({
  containerClassName,
  type = "light",
  items = [],
  showMoreItems = true,
  title
}) => {

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
  return (
    <div className={`lg:container mx-auto ${containerClassName}`}>

      <Card className={`carousel-wrapper ${styles[`carousel-wrapper--${type}`]}`}>
        <Carousel
          ssr
          partialVisible
          deviceType={"desktop"}
          responsive={responsive}
          rtl
        >
          <CarouselHead title={title} type={type} />
          {items.map((item, index) => {
            return <ProductItem key={index} type={type} />
          })}
          {showMoreItems ? <ShowMoreItems /> : null}
        </Carousel>
      </Card>
    </div>
  )
}

export default Home
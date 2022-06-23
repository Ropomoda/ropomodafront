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
  items=[],
  showMoreItems = true ,
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
      items: 5,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      paritialVisibilityGutter: 30
    }
  };
  return (
    <div className={`container mx-auto ${containerClassName}`}>

      <Card className={`${styles[`carousel-wrapper--${type}`]}`}>
        <Carousel
          ssr
          partialVisible
          deviceType={"desktop"}
          responsive={responsive}
          rtl
        >
          <CarouselHead title={title}/>
          {items.map((item,index)=>{
            return <ProductItem key={index} type={type} />
          })}
          {showMoreItems ? <ShowMoreItems /> : null}
        </Carousel>
      </Card>
    </div>
  )
}

export default Home
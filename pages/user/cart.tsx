import { Row } from 'antd';
import ShopLayout from '../../components/layout/shopLayout';
import Basket from '../../components/cart';



function Home() {

  return (
    <ShopLayout>
      <div className='pt-3'>
        <Row className='my-1'>
          <h5 className='text-md'>
            سبد خرید
          </h5>
        </Row>
        <Basket />
      </div>
    </ShopLayout>
  )
}

export default Home
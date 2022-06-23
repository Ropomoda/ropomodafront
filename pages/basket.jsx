import { Button, Card, Col, Empty, Row, Tabs } from 'antd';
import ShopLayout from '../components/layout/shopLayout';
import { numberWithCommas, persianNumber } from '../utils/utils';


const { TabPane } = Tabs;

function Home() {
  const shippingCost = 28000;
  const productsTotalCost = 885000;
  const discount = 340000;
  const discountPercent = ((discount / productsTotalCost) * 100).toFixed(0);
  const payable = productsTotalCost + shippingCost - discount;

  return (
    <ShopLayout>
      <div className='pt-3'>
        <Row className='my-1'>
          <h5 className='text-md'>
            سبد خرید
          </h5>
        </Row>
        <Row gutter={20}>
          <Col span={18}>
            <Card>
              <div className='flex flex-col justify-center items-center my-5'>
                <Empty description="" />
                <h3 className='text-2xl mt-2'>سبد خرید شما خالی است!</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
                <div className='flex flex-row justify-center items-center'>
                  <Button type='link'>محصولات حراجی</Button>
                  <span>
                    |
                  </span>
                  <Button type='link'>پیشنهاداتی برای شما</Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <span>قیمت کالاها ({persianNumber(2)})</span>
                  <span>
                    {persianNumber(numberWithCommas(productsTotalCost))}
                  </span>
                </div>
                <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                  <span>مجموع تخفیف</span>
                  <div>
                    <span className='ml-1'>
                      (٪{persianNumber(discountPercent)})
                    </span>
                    <span>
                      {persianNumber(numberWithCommas(discount))}
                    </span>
                  </div>
                </div>
                <div className='flex flex-row justify-between mt-3'>
                  <span>هزینه ارسال</span>
                  <span>
                    {persianNumber(numberWithCommas(shippingCost))}
                  </span>
                </div>
                <div className='flex flex-row justify-between mt-16 text-lg font-bold'>
                  <span>قابل پرداخت</span>
                  <span>
                    {persianNumber(numberWithCommas(payable))}
                  </span>
                </div>

                <Button type='primary' size='large' className='flex flex-row items-center mt-5'>
                  ادامه خرید
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </ShopLayout>
  )
}

export default Home
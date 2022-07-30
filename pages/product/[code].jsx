import { Button, Card, Col, Divider, Image, Row } from 'antd';
import ShopLayout from '../../components/layout/shopLayout';
import Collection from '../../components/collection';
import { numberWithCommas, persianNumber } from '../../utils/utils';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function Home() {
  const shippingCost = 28000;
  const productsTotalCost = 885000;
  const discount = 340000;
  const discountPercent = ((discount / productsTotalCost) * 100).toFixed(0);
  const payable = productsTotalCost + shippingCost - discount;

  return (
    <ShopLayout>
      <Row gutter={5} className="container mx-auto pt-8">
        <Col span={18}>
          <Card>
            <div className='flex flex-row'>
              <TransformWrapper >
                <TransformComponent>
                  <Image
                    width={400}
                    height={400}
                    preview={{
                      mask: <>نمایش</>
                    }}
                    src={`https://dkstatics-public.digikala.com/digikala-products/3fc048be1c5400cc15c1a4620b0a0f5282aab53c_1652944681.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90`} alt="test" />
                </TransformComponent>
              </TransformWrapper>
              <div className='flex flex-col justify-start mr-3'>
                <h1 className='text-lg'>پیراهن آستین بلند زنانه آیبکس مدل 1030رنگ سرمه ای</h1>
                <Divider />
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <span>
                  قیمت کالاها ({persianNumber(2)})
                </span>
                <span>
                  {persianNumber(numberWithCommas(productsTotalCost))}
                </span>
              </div>
              <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                <span>
                  مجموع تخفیف
                  <i className='fal fa-badge-percent mr-2' />
                </span>
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
                <span>
                  هزینه ارسال
                  <i className='fal fa-truck mr-2' />
                </span>
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
                افزودن به سبد خرید
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </ShopLayout>
  )
}

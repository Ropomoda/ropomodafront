import { Button, Card, Col, Empty, Row } from "antd"
import { numberWithCommas, persianNumber } from '../../utils/utils'
import Price from "../utils/price";

function Home() {
    const shippingCost = 0;
    const productsTotalCost = 885000;
    const discount = 340000;
    const discountPercent = ((discount / productsTotalCost) * 100).toFixed(0);
    const payable = productsTotalCost + shippingCost - discount;
  
    
    return (
        <Row gutter={20} className="items-center justify-center">
            <Col lg={18} span={24} className="mb-3">
                <Card>
                    <div className='flex flex-col justify-center items-center my-5 text-center'>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
                        <h3 className='text-2xl mt-2'>سبد خرید شما خالی است!</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </p>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <Button type='link'>محصولات حراجی</Button>
                            <span>
                                |
                            </span>
                            <Button type='link'>پیشنهاداتی برای شما</Button>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col lg={6} span={24} className="mb-3">
                <Card>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <span>
                                قیمت کالاها ({persianNumber(2)})
                            </span>
                            <Price>
                                {productsTotalCost}
                            </Price>
                        </div>
                        <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                            <span>
                                مجموع تخفیف
                                <i className='fal fa-badge-percent mr-2' />
                            </span>
                            <div className="flex flex-row">
                                <span className='ml-1'>
                                    (٪{persianNumber(discountPercent)})
                                </span>
                                <Price>
                                    {discount}
                                </Price>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between mt-3'>
                            <span>
                                هزینه ارسال
                                <i className='fal fa-truck mr-2' />
                            </span>
                            <span>
                                رایگان!
                            </span>
                        </div>
                        <div className='flex flex-row justify-between mt-16 text-lg font-bold'>
                            <span>قابل پرداخت</span>
                            <Price>
                                {payable}
                            </Price>
                        </div>

                        <Button type='primary' size='large' className='flex flex-row items-center mt-5'>
                            ادامه خرید
                            <i className='fal fa-fast-backward mr-2' />
                        </Button>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Home
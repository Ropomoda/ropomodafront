import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Radio, Row, Steps } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Price from '../../components/utils/price';
import { getS3Image } from '../../utils/utils';
import AddressModal from '../../components/address';

const { Step } = Steps;

function Home() {
    const router = useRouter()
    const [addressVisible, setAddressVisible] = useState(false)
    return (
        <div className='sm:container mx-auto'>
            <Col>
                <Row className='py-10'>
                    <Card className='w-full text-center'>
                        <Link href={'/'}>
                            <div className='flex flex-row justify-center items-center cursor-pointer'>
                                <Image src={getS3Image("ropomoda.svg")} width={200} height={50} />
                                <Image src={getS3Image("logo.svg")} width={40} height={40} />
                            </div>
                        </Link>
                        <div className='mt-5'>
                            <Steps>
                                <Step onClick={() => { router.push("/user/cart") }} status="finish" title="سبد خرید" icon={<i className='fal fa-shopping-bag' />} />
                                <Step status="process" title="انتخاب آدرس و شیوه پرداخت" icon={<i className='fal fa-truck' />} />
                                <Step status="wait" title="پرداخت" icon={<i className='fal fa-wallet' />} />
                            </Steps>
                        </div>
                    </Card>
                </Row>
                <Row gutter={20}>
                    <Col span={24} sm={18}>
                        <Card>
                            <h3 className='mb-3'>انتخاب آدرس تحویل سفارش</h3>
                            {[...Array(3)].map((address, index) => <div key={index} className="mb-3">
                                <Card>
                                    <div className='flex flex-col sm:flex-row justify-between'>
                                        <div>
                                            <h3>آدرس ادرس ادرس</h3>
                                            <h5 className='text-gray-400'>نام و نام خانوادگی </h5>
                                        </div>
                                        <div>
                                            <Button className='text-secondary' type='link'>
                                                <span>
                                                    ویرایش
                                                </span>

                                                <i className="fal fa-edit mr-2 " />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>)}
                            <Button onClick={() => { setAddressVisible(true) }} className='text-secondary' type='link'>
                                <i className="fal fa-plus ml-2 " />
                                <span>
                                    افزودن آدرس جدید
                                </span>
                            </Button>
                        </Card>
                    </Col>
                    <Col span={24} sm={6}>
                        <div className='mb-3 mt-3 sm:mt-0'>
                            <Card>
                                <Radio.Group size='large' defaultValue={0}>
                                    <Radio disabled value={3}>کیف پول (به زودی)</Radio>
                                    <Radio value={0}>پرداخت اینترنتی</Radio>
                                    <Radio value={1}>پرداخت در محل</Radio>
                                </Radio.Group>
                            </Card>
                        </div>
                        <Card>
                            <div className='flex flex-col'>
                                <div className='flex flex-row justify-between'>
                                    <span>
                                        قیمت کالاها
                                    </span>
                                    <Price>
                                        {10000}
                                    </Price>
                                </div>
                                <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                                    <span>
                                        مجموع تخفیف
                                        <i className='fal fa-badge-percent mr-2' />
                                    </span>
                                    <div className="flex flex-row">

                                        <Price>
                                            {10000}
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
                                        {1000}
                                    </Price>
                                </div>

                                <Link href={"/checkout/shipping"}>
                                    <Button type='primary' size='large' className='flex flex-row items-center mt-5'>
                                        پرداخت
                                        <i className='fal fa-wallet mr-2' />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Col>
            <AddressModal onChange={()=>{}} visible={addressVisible} />
        </div>
    )
}

export default Home
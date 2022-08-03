import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Radio, Row, Steps, Tooltip } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Price from '../../components/utils/price';
import { getS3Image } from '../../utils/utils';
import AddressModal from '../../components/address';
import { connect } from 'react-redux';
import { addAddresses, getَAddresses } from '../../actions/accountAction';
import httpReq from '../../http_requests';

const { Step } = Steps;

function Home({ getَAddresses, account, cartItems }) {
    const {
        addresses
    } = account || {};
    const [productsTotalCost, setProductsTotalCost] = useState(0);
    const [rrpPriceTotalCost, setRrpPriceTotalCost] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(0)
    const discountPrice = rrpPriceTotalCost - productsTotalCost;
    const [loading, setLoading] = useState(false);
    const addCartItemsToOrder = async (orderId) => {
        cartItems.forEach(async (item) => {
            await httpReq.storeReq.createOrderRow({
                orderId: orderId,
                product: item.product.uuid,
                quantity: item.quantity
            });
        });
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const makeOrder = async () => {
        setLoading(true);
        try {
            const { data: orderData } = await httpReq.storeReq.createOrder({
                address: addresses[0].uuid,
                payment_method: paymentMethod
            });
            const { uuid: orderId } = orderData;
            await addCartItemsToOrder(orderId);
            await sleep(2);
            const { data: paymentData } = await httpReq.storeReq.createOrderPayment({
                orderId
            });
            const { payment_url } = paymentData;
            window.location.href = payment_url;
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }


    const calculateSumOfItem = (cartItems) => {
        let productsTotalCost = 0;
        let rrpPriceTotalCost = 0;
        cartItems.forEach((item) => {
            const { product, quantity } = item;
            const { selling_price, rrp_price } = product;
            productsTotalCost += quantity * selling_price;
            rrpPriceTotalCost += quantity * rrp_price;
        });
        setProductsTotalCost(productsTotalCost);
        setRrpPriceTotalCost(rrpPriceTotalCost);
    }
    useEffect(() => {
        calculateSumOfItem(cartItems);
    }, [cartItems]);
    const router = useRouter()
    const [addressVisible, setAddressVisible] = useState(false);

    const setAddressVisibleHandler = async (state) => {
        await getَAddresses();
        setAddressVisible(state);
    }
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

                            {addresses && addresses.length > 0 ? <Radio.Group size='large' defaultValue={addresses[0].uuid} className="w-full">
                                {addresses.map((address, index) => <div key={index} className="mb-3">
                                    <Card className='w-full'>
                                        <Radio className='w-full' value={address.uuid} >

                                            <div className='flex flex-col sm:flex-row justify-between'>
                                                <div>
                                                    <h3>{address.post_address}</h3>
                                                    <h5 className='text-gray-400'>{address.city}</h5>
                                                </div>
                                            </div>
                                        </Radio>
                                    </Card>
                                </div>)}
                            </Radio.Group> : <Button onClick={() => { setAddressVisible(true) }} className='text-secondary' type='link'>
                                <i className="fal fa-plus ml-2 " />
                                <span>
                                    افزودن آدرس جدید
                                </span>
                            </Button>}

                        </Card>
                    </Col>
                    <Col span={24} sm={6}>
                        <div className='mb-3 mt-3 sm:mt-0'>
                            <Card>
                                <Radio.Group size='large' value={paymentMethod} onChange={(value) => { setPaymentMethod(value.target.value) }}>
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
                                        {rrpPriceTotalCost}
                                    </Price>
                                </div>
                                <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                                    <span>
                                        سود شما از این خرید
                                    </span>
                                    <div className="flex flex-row">
                                        <Price>
                                            {discountPrice}
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
                                        {productsTotalCost}
                                    </Price>
                                </div>

                                <Button loading={loading} onClick={() => { makeOrder() }} type='primary' size='large' className='flex flex-row items-center mt-5'>
                                    پرداخت
                                    <i className='fal fa-wallet mr-2' />
                                </Button>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Col >
            <AddressModal onChange={setAddressVisibleHandler} visible={addressVisible} />
        </div >
    )
}

const mapStateToProps = (state, ownProps) => ({
    account: state?.account,
    cartItems: state?.cart?.items || [],

});
const mapDispatchToProps = (dispatch) => {
    return {
        getَAddresses: () => dispatch(getَAddresses()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)

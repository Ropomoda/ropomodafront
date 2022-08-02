import { Button, Card, Col, Empty, Row } from "antd"
import { numberWithCommas, persianNumber } from '../../utils/utils'
import Price from "../utils/price";
import CartItem from "./cartItem";
import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import Link from "next/link";


function Home({ cartItems }) {
    const [productsTotalCost, setProductsTotalCost] = useState(0);
    const [rrpPriceTotalCost, setRrpPriceTotalCost] = useState(0);
    const discountPrice = rrpPriceTotalCost - productsTotalCost;

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
    return (
        <Row gutter={20} className="items-center justify-center mt-3">
            <Col lg={18} span={24} className="mb-3">
                <Card>
                    {cartItems.length > 0 ? <div>
                        {cartItems.map((item, index) => <CartItem {...item} key={index} />)}

                    </div> : <div className='flex flex-col justify-center items-center my-5 text-center'>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
                        <h3 className='text-2xl mt-2'>سبد خرید شما خالی است!</h3>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <Link href={"/"}>
                                <Button type='link'>رفتن به لیست محصولات</Button>
                            </Link>
                            <span>
                                |
                            </span>
                            <Link href={"/categories"}>
                                <Button type='link'>دسته‌بندی ها</Button>
                            </Link>
                        </div>
                    </div>}
                </Card>
            </Col>
            {cartItems?.length > 0 ? <Col lg={6} span={24} className="mb-3">
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

                        <Link href={"/checkout/shipping"}>
                            <Button type='primary' size='large' className='flex flex-row items-center mt-5'>
                                ادامه خرید
                                <i className='fal fa-fast-backward mr-2' />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Col> : null}
        </Row>
    )
}

const mapStateToProps = (state, ownProps) => ({
    cartItems: state?.cart?.items || [],
});
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
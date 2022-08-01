import { Button, Card, Col, Divider, Image, Input, Row } from 'antd';
import ShopLayout from '../../components/layout/shopLayout';
import Collection from '../../components/collection';
import { numberWithCommas, persianNumber } from '../../utils/utils';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { calculatePriceDiscountPercent } from '../../utils/price';
import httpReq from '../../http_requests';
import { getProductAbsoluteCode } from '../../utils/product';
import { addItemToCart, deleteCartItem } from '../../actions/cartActions';
import { connect } from "react-redux";
import * as R from 'ramda';
import Head from 'next/head';
interface productModel {
  uuid: string;
  title_fa: string;
  title_en: string;
  rrp_price: Number;
  selling_price: Number;
  max_quantity: Number;
  main_image: string;
}
function Home({ addItemToCart, deleteCartItem, cartItems }) {
  const router = useRouter();
  const queryCode: string = router.query?.code as string;
  const code = getProductAbsoluteCode(queryCode);
  const productDefaults: productModel = {
    uuid: "",
    title_fa: "",
    title_en: "",
    rrp_price: 0,
    selling_price: 0,
    max_quantity: 0,
    main_image: "",
  };

  const [cartItem, setCartItem] = useState(undefined);
  const [productDetail = productDefaults, setProductDetail] = useState<productModel>();
  const { uuid, title_fa, rrp_price, selling_price, max_quantity, main_image } = productDetail;
  const discountPrice: Number = +rrp_price - +selling_price;
  const discountPercent = calculatePriceDiscountPercent(rrp_price, selling_price);
  const checkProductIsInCart = (uuid) => {
    const findProduct = ({ product }) => {
      const productId = product?.uuid || "";
      return uuid === productId
    }
    const cartItem = R.find(findProduct, cartItems);
    return cartItem || undefined;
  }
  const getSingleProductData = async (code) => {
    try {
      const { data = {} } = await httpReq.storeReq.getSingleProduct({ code: code });
      setProductDetail(data);
    } catch (err) {
      console.log(err);
    }
  }
  const addProductToCartHandler = (uuid, quantity = 1) => {
    addItemToCart(uuid, quantity);
  }
  const deleteCartItemHandler = (cartItemId) => {
    deleteCartItem(cartItemId);
  }
  useEffect(() => {
    getSingleProductData(code);
  }, []);
  useEffect(() => {
    setCartItem(checkProductIsInCart(uuid));
  }, [productDetail, cartItems]);
  return (
    <ShopLayout>
      <Head>
        <meta property="og:title" content={title_fa} />
        <meta property="og:site_name" content="Ropomoda.com" />
        <meta property="og:url" content={`https://ropomoda.com/product/${queryCode}`} />
        <meta property="og:description" content={`قیمت : ${selling_price}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={main_image} />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:availability" content="in stock" />
      </Head>
      <Row gutter={5} className="container mx-auto pt-8">
        <Col span={24} sm={18}>
          <Card>
            <div className='flex flex-col sm:flex-row'>
              <TransformWrapper >
                <TransformComponent>
                  <Image
                    width={300}
                    height={300}
                    preview={{
                      mask: <>بزرگ‌نمایی</>
                    }}
                    src={main_image} alt={title_fa} />
                </TransformComponent>
              </TransformWrapper>
              <div className='flex flex-col justify-start mr-3'>
                <h1 className='text-lg'>{title_fa}</h1>
                <Divider />
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24} sm={6}>
          <Card>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-row justify-between'>
                <span>
                  قیمت
                </span>
                <span>
                  {persianNumber(numberWithCommas(rrp_price))}
                </span>
              </div>
              <div className='flex flex-row justify-between mt-3 font-extrabold text-red-500'>
                <span>
                  تخفیف
                  <i className='fal fa-badge-percent mr-2' />
                </span>
                <div>
                  <span className='ml-1'>
                    (٪{persianNumber(discountPercent)})
                  </span>
                  <span>
                    {persianNumber(numberWithCommas(discountPrice))}
                  </span>
                </div>
              </div>
              <div className='flex flex-row justify-between mt-16 text-lg font-bold'>
                <span>قابل پرداخت</span>
                <span>
                  <span>
                    {persianNumber(numberWithCommas(selling_price))}
                  </span>
                </span>
              </div>
              <div className='mt-8'>
                {cartItem ? <div className='flex flex-row justify-center items-center'>
                  <Button disabled type='ghost' size='large' className='ml-1'>
                    <i className='fal fa-angle-up text-xl mx-1 text-red-500' />
                  </Button>
                  <Input
                    max={max_quantity as number}
                    min={1}
                    type="number"
                    size='large'
                    className='text-center'
                    defaultValue={cartItem?.quantity} />
                  <Button
                    onClick={() => { deleteCartItemHandler(cartItem.uuid) }}
                    type='ghost'
                    size='large'
                    className='mr-1'>
                    <i className='fal fa-trash text-xl mx-1 text-red-500' />
                  </Button>
                </div> :
                  <Button
                    onClick={() => { addProductToCartHandler(uuid) }}
                    type='primary'
                    size='large'
                    className='flex flex-row items-center w-full'>
                    افزودن به سبد خرید
                  </Button>}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </ShopLayout>
  )
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: state?.cart?.items || [],
});
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
    addItemToCart: (productId, quantity) => dispatch(addItemToCart(productId, quantity)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
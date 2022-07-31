import { Button, Card, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { connect } from 'react-redux';
import { deleteCartItem } from '../../actions/cartActions';
import { getProductFullCode } from '../../utils/product';
import ImageLoader from '../productItem/imageLoader';
import Price from '../utils/price';
function Home({ product, quantity, uuid, deleteCartItem }) {
    const { code, title_fa, inventory, max_quantity, selling_price, main_image = null } = product;

    const deleteCartItemHandler = (cartItemId) => {
        deleteCartItem(cartItemId);
    }

    return (
        <Card>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <Link href={`/product/${getProductFullCode(code)}`}>
                        <ImageLoader
                            src={`/images/loading-image.gif`}
                            className={`lazyload rounded-lg cursor-pointer`}
                            data-src={main_image}
                            width={200}
                            height={200}
                        />
                    </Link>
                    <div className='mr-5'>
                        <p className='text-xl'>
                            {title_fa}
                        </p>
                        {inventory <= 3 ? <p className='text-sm text-red-500'>
                            تنها {inventory} عدد در انبار باقی مانده
                        </p> : null}

                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <Price wrapperClassName="text-2xl">
                        {selling_price}
                    </Price>
                    <div className='flex flex-row'>
                        <Button
                            disabled
                            type='ghost'
                            size='large'
                            className='ml-1'>
                            <i className='fal fa-angle-up text-xl mx-1 text-red-500' />
                        </Button>
                        <Input
                            max={max_quantity}
                            min={1}
                            type="number"
                            size='large'
                            className='text-center'
                            defaultValue={quantity} />
                        <Button
                            onClick={() => { deleteCartItemHandler(uuid) }}
                            type='ghost'
                            size='large'
                            className='mr-1'>
                            <i className='fal fa-trash text-xl mx-1 text-red-500' />
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (productId) => dispatch(deleteCartItem(productId)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
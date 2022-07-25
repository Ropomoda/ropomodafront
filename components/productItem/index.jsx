import { Badge, Card } from 'antd';
import { isValueHollow, persianNumber } from '../../utils/utils';
import styles from './styles.module.scss';
import ImageLoader from './imageLoader';
import Link from 'next/link';
import Price from '../utils/price';
import { getProductFullCode } from '../../utils/product';

const Home = ({ wrapperClassName = "", productInfo = {} }) => {
    const { code, name, price, count, collectionInfo = null, image = null } = productInfo;
    const { collectionName = null, collectionPrimaryColorHex = null } = collectionInfo || {};
    const wrapRibbonBadge = (child, collectionName, collectionPrimaryColorHex) => {
        return isValueHollow(collectionName) ? child : <Badge.Ribbon placement='start' text={collectionName} color={collectionPrimaryColorHex}>
            {child}
        </Badge.Ribbon>

    }
    return (
        <Link href={`/product/${getProductFullCode(code)}`}>
            <div className={`ml-3 h-full ${wrapperClassName}`}>
                {wrapRibbonBadge(<Card className='h-full cursor-pointer'>
                    <div className={`flex flex-col ${styles["product-item-wrapper"]} h-full`}>
                        <ImageLoader
                            src={`/images/loading-image.gif`}
                            className={`${styles["product-image"]} lazyload rounded-lg`}
                            data-src={image}
                        />
                        <h2 className='mt-3'>{name}</h2>
                        <div className='w-full flex flex- justify-between items-center'>
                            {/* <span className='ml-1 text-white bg-primary px-2 py-1 rounded-3xl'>
                                ٪{persianNumber(15)}
                            </span> */}
                            <div className='flex flex-col'>
                                <Price>
                                    {price}
                                </Price>
                            </div>
                        </div>
                    </div>
                </Card>, collectionName, collectionPrimaryColorHex)}
            </div >
        </Link>
    )
}

export default Home
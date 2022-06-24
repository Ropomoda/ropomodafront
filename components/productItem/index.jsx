import { Card } from 'antd';
import { numberWithCommas, persianNumber } from '../../utils/utils';
import styles from './styles.module.scss';
import ImageLoader from './imageLoader';
import Link from 'next/link';

const Home = ({ wrapperClassName = "" }) => {
    return (
        <div className={`ml-3 h-full ${wrapperClassName}`}>
            <Link href="/product">
                <Card className='h-full cursor-pointer'>
                    <div className={`flex flex-col ${styles["product-item-wrapper"]} h-full`}>
                        <ImageLoader
                            src={`/images/loading-image.gif`}
                            className={`${styles["product-image"]} lazyload`}
                            data-src={`https://picsum.photos/150/150/?${Math.random()}`}
                        />
                        <h2 className='mt-3'>نام محصول</h2>
                        <div className='w-full text-left'>
                            <span>{persianNumber(numberWithCommas(150000))}</span>
                            <span className='mr-1 text-xs'>تومان</span>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default Home
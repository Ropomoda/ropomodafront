import { Card } from 'antd';
import Link from 'next/link';
import styles from './styles.module.scss';

function Home() {
    return (
        <Link href={"/search"}>
            <Card className='flex flex-col justify-center h-full cursor-pointer'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div className={`mb-3 ${styles["show-more-items"]}`}>
                        <i className='far fa-arrow-left text-lg' />
                    </div>
                    <span>مشاهده همه</span>
                </div>
            </Card>
        </Link>
    )
}

export default Home;
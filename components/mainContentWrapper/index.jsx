import { Card, Spin } from 'antd';
import Image from 'next/image';
import { getS3Image } from '../../utils/utils';
import styles from './styles.module.scss';
import { connect } from 'react-redux';

function Home({ children, contentLoading }) {
    return (
        <main id="main-content-wrapper" className={`${styles["main-content-wrapper"]}`}>
            <Spin size='large' spinning={contentLoading}>
                <div className='sm:container mx-auto'>
                    {children}
                </div>
            </Spin>
        </main>
    )
}
const mapStateToProps = (state, ownProps) => ({
    contentLoading: state?.content?.loading || false,
});
export default connect(mapStateToProps)(Home);

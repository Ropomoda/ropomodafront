import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';
import ShopLayout from '../../components/layout/shopLayout';

function Home({ account }) {
    const { token, user, profile } = account;
    const { name } = profile || {};
    return (
        <ShopLayout>
            {token ? <Col>
                <Row justify='center'>
                    <div className='text-center'>
                        <p className='text-xl mt-3'>سلام</p>
                        <p className='text-xl mt-3'>{name} عزیز؛</p>
                        <p className='text-xl mt-3'>خوش اومدی</p>
                    </div>
                </Row>
            </Col> :
                <div className='flex flex-col justify-center items-center text-center mt-16'>
                    <p className='text-lg'>برای مشاهده پروفایل لطفا وارد حساب کاربری خود شوید</p>
                    <Link href={"/user/login"}>
                        <Button type='primary' size='large'>ثبت نام یا ورود به حساب کاربری</Button>
                    </Link>
                </div>
            }
        </ShopLayout >
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.account || {}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
import { Card, Row, Col, Breadcrumb, Collapse, Button, Switch, } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import ShopLayout from '../components/layout/shopLayout';
import ProductItem from '../components/productItem';
import httpReq from '../http_requests';
const { Panel } = Collapse;



function Home({ }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [productList, setProductList] = useState([]);

    const getCollectionData = async () => {
        setLoading(true);
        try {
            const { data = [] } = await httpReq.storeReq.getAllProducts();

            // a short sleep for loading images
            setProductList(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getCollectionData();
    }, []);


    return (
        <ShopLayout>
            <Row className='pt-5'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link href="/">صفحه اصلی</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        لیست محصولات
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row className='pt-5' gutter={20}>
                <Col span={24}>
                    <Card>
                        <div className='flex flex-row flex-wrap justify-center sm:justify-start'>
                            {productList.map((productItem, i) => <ProductItem productInfo={productItem} wrapperClassName="mb-2" key={i} />)}
                        </div>
                    </Card>
                </Col>
            </Row>
        </ShopLayout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getSampleData: () => dispatch(getSampleData),
    }
}
export default connect(undefined, mapDispatchToProps)(Home)
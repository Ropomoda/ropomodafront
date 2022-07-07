import { Card, Row, Col, Breadcrumb, Collapse, Button, Switch, } from 'antd';
import Link from 'next/link';
import { useEffect } from 'react';
import { connect } from "react-redux";
import ShopLayout from '../components/layout/shopLayout';
import ProductItem from '../components/productItem';
import { getSampleData } from '../store/actions/sampleAction';
const { Panel } = Collapse;


const text = `
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
`;



function Home({ getSampleData }) {

    useEffect(() => {
        getSampleData();
    }, []);


    return (
        <ShopLayout>
            <Row className='pt-5'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link href="/">صفحه اصلی</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        تاپ و تیشرت
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row className='pt-5' gutter={20}>
                <Col span={0} sm={6} className="search-side-box">
                    <Card>
                        <div className='flex flex-row justify-between mb-1'>

                            <h5 className='text-xl'>فیلتر ها</h5>
                            <Button type='link'>
                                حذف فیلترها
                            </Button>
                        </div>
                        <Collapse bordered={false} ghost>
                            <Panel header="برند" key="3">
                                <p>{text}</p>
                            </Panel>
                            <hr className='divider' />
                            <Panel header="رنگ" key="1">
                                <p>{text}</p>
                            </Panel>
                            <hr className='divider' />
                            <Panel header="قیمت" key="2">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                        <div className='mt-3'>
                            <div className='flex flex-row justify-between items-center mt-4 cursor-pointer'>
                                <span>فقط کالا های موجود</span>
                                <Switch checked />
                            </div>
                            <hr className='divider mt-3' />
                            <div className='flex flex-row justify-between items-center mt-3 cursor-pointer'>
                                <span>فقط اجناس حراجی</span>
                                <Switch />
                            </div>
                        </div>
                    </Card>
                    <div className='mt-4'>
                        <Card>
                            <div className='flex flex-col justify-center'>

                                <h5 className='text-xl mb-5'>جدیدترین ها</h5>
                                {[...Array(3)].map((v, i) => <ProductItem wrapperClassName="mb-2" key={i} />)}

                                <Button className='mt-3' size='large' type='primary'>
                                    مشاهده همه
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col span={24} sm={18}>
                    <Card>
                        <div className='flex flex-row flex-wrap justify-end'>
                            {[...Array(60)].map((v, i) => <ProductItem wrapperClassName="mb-2" key={i} />)}
                        </div>
                    </Card>
                </Col>
            </Row>
        </ShopLayout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSampleData: () => dispatch(getSampleData),
    }
}
export default connect(undefined, mapDispatchToProps)(Home)
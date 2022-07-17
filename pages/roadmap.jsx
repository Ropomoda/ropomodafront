import { Col, Divider, Steps } from 'antd';
import ShopLayout from '../components/layout/shopLayout';
const { Step } = Steps;

export default function Home() {
    return (
        <ShopLayout>

            <div className='road-map-wrapper pt-5 text-center '>
                <h1>مسیر روپومدا</h1>
                <Col className='flex flex-col items-center justify-center my-10'>
                    <Steps className='no-max-width' current={1} direction="vertical" status='process'>
                        <Step title="بهار 1401 🌱" description="تولد روپومدا 🎂" />

                        {/* <Step stepNumber={1.1} title="تابستان 1401" description="افزایش تنوع محصولات" /> */}
                        <Step title="..." description="خبر های خوبی تو راهه" />

                    </Steps>
                </Col>
            </div>
        </ShopLayout>
    );
}
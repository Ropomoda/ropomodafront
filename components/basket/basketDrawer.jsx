import { Button, Card, Col, Drawer, Empty, Row } from 'antd'
import Basket from './index';

function Home({ visible, onClose }) {
 

    return (
        <Drawer
            title="سبد خرید"
            placement={"bottom"}
            onClose={onClose}
            visible={visible}
            extra={
                <Button type='text' onClick={onClose}>بستن</Button>
            }
            closable={false}
            height={"80vh"}
        >
            <Basket />
        </Drawer>
    )
}

export default Home
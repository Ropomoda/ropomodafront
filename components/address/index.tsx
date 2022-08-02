import React from 'react'
import { Button, Col, Dropdown, Form, Input, Modal, Row, Select } from "antd"
import { NextPage } from "next"
const { Option } = Select;

interface Props {
    visible: boolean;
    onChange: (event: React.MouseEvent<HTMLElement>) => void;
}
const Home: NextPage<Props> = ({ visible, onChange }) => {
    console.log(visible);

    return (
        <Modal footer={[
            <Button key={0}>
                بستن
            </Button>,
            <Button key={1} type="primary">
                افزودن
            </Button>,
        ]}
            visible={visible}
            width={750}
            title="افزودن آدرس جدید"
            onCancel={onChange}
        >
            <Form>
                <Col>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item label="استان">
                                <Select size='large' defaultValue="تهران">
                                    <Option value="اردبیل">اردبیل</Option>
                                    <Option value="آذربایجان شرقی">آذربایجان شرقی</Option>
                                    <Option value="تهران">تهران</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="شهر">
                                <Select size='large' defaultValue="تهران">
                                    <Option value="اردبیل">اردبیل</Option>
                                    <Option value="آذربایجان شرقی">آذربایجان شرقی</Option>
                                    <Option value="تهران">تهران</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
            </Form>
        </Modal>
    )
}

export default Home
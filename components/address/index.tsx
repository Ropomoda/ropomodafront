import React, { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Input, message, Modal, Row, Select } from "antd"
import { NextPage } from "next"
import { getCities, getProvinces } from '../../utils/iranInfo';
import { addAddresses } from '../../actions/accountAction';
import { connect } from 'react-redux';
const { Option } = Select;

interface Props {
    visible: boolean;
    onChange: any;
    addAddresses: any;
}
const Home: NextPage<Props> = ({ visible, onChange, addAddresses }) => {
    const states = getProvinces();
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const addAddressHandler = async () => {
        setLoading(true);
        try {
            const fields = await form.validateFields();
            await addAddresses({
                ...fields,
                name: "آدرس",
                description: "آدرس",
                longitude: 0,
                latitude: 0,
                plaque: 0,
                floor: 0,
            });
            message.success("آدرس با موفقیت اضافه شد");
            onChange(false);
        } catch (error) {
            console.log(error);

        }
        setLoading(false);
    }
    useEffect(() => {
        if (selectedState) {
            setCities(getCities(selectedState));
        }

    }, [selectedState])

    return (
        <Modal footer={[
            <Button size='large' key={0} onClick={() => { onChange(false) }}>
                بستن
            </Button>,
            <Button loading={loading} onClick={() => { addAddressHandler() }} size='large' key={1} type="primary">
                افزودن
            </Button>,
        ]}
            visible={visible}
            width={750}
            title="افزودن آدرس جدید"
            onCancel={() => { onChange(false) }}
            centered
        >
            <Form form={form}>
                <Col>
                    <Row gutter={20}>
                        <Col span={24} sm={12}>
                            <Form.Item name={"state"} label="استان">
                                <Select size='large' onChange={(value) => { setSelectedState(value) }}>
                                    {states.map((state, index) => <Option key={index} value={state.id}>{state.name}</Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24} sm={12}>
                            <Form.Item name={"city"} label="شهر">
                                <Select size='large' disabled={cities.length === 0}>
                                    {cities.map((state, index) => <Option key={index} value={state.id}>{state.name}</Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={24} sm={12}>
                            <Form.Item name={"post_address"} label="آدرس">
                                <Input.TextArea rows={3} size='large' />
                            </Form.Item>
                        </Col>
                        <Col span={24} sm={12}>
                            <Form.Item name={"post_code"} label="کد پستی">
                                <Input size='large' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
            </Form>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAddresses: (addressInfo) => dispatch(addAddresses(addressInfo)),
    }
};
export default connect(undefined, mapDispatchToProps)(Home)

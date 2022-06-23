import { Button, ConfigProvider, Form, Input, Modal, notification } from 'antd'
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import React, { useEffect, useState } from 'react'

const Home = ({ visible, onOk, onCancel }) => {
    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(59);
    const [page, setPage] = useState(1);

    const loginHandler = async () => {
        setLoading(true);
        try {
            await loginForm.validateFields();
            notification.success({
                message: 'کد تایید',
                description:
                    'کد تایید به فیلان ارسال شد',
                placement: "bottomLeft",
                duration: 5
            });
            setPage(2);
        } catch (err) {
            notification.error({
                message: 'خطا',
                description: "لطفن شماره موبایل یا ایمیلت رو وارد کن",
                placement: "bottomLeft",
                duration: 5
            });
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            closable
            title={
                <>
                    ورود | ثبت نام
                </>
            }
            centered
            maskStyle={{ backgroundColor: "#F9AFEC" }}
            maskClosable={false}
            footer={null}
        >
            <Form onSubmitCapture={loginHandler} form={loginForm} >
                <QueueAnim duration={500} type="scale" className='flex flex-col'>
                    {page === 1 ? <div key="1">
                        <p key="1" className='mb-10'>
                            درود!
                            <br />
                            شماره موبایل یا ایمیل را وارد کن تا ک کنی ورود
                        </p>
                        <div key="2">
                            <ConfigProvider direction='ltr' >
                                <Form.Item
                                    key="2"
                                    rules={[
                                        {
                                            required: true,
                                            message: "میشه اینو خالی نذاری؟"
                                        }
                                    ]}
                                    name="esagfv"
                                >
                                    <Input size='large' placeholder='ایمیل یا شماره موبایل' />
                                </Form.Item>
                            </ConfigProvider>
                        </div>

                        <div key="3">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                ورود یا ثبت نام
                            </Button>
                        </div>

                        <p key="4" className='text-xs mt-4 text-center'>
                            ورود شما به منزله پذیرش شرایط RopoModa و قوانین حریم‌خصوصی است
                        </p>
                    </div> : <div key="2">
                        <p key="5" className='mb-6'>
                            یه کد برات فرستادیم
                        </p>
                        <div key="6" className='flex flex-row'>

                            {[...Array(5)].map((value, index) => <div key={index} className="mx-3" >
                                <Input className='text-center' size='large' placeholder={`${5 - index}`} />
                            </div>)}

                        </div>
                        <a key="7" size='large' type='link' className='mt-2 text-right text-xs'>
                            {timer === 0 ?
                                <>ارسال مجدد کد تایید</> :
                                <> ارسال کد تایید بعد از {timer} ثانیه</>}
                        </a>
                        <div key="8">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                تایید
                            </Button>
                        </div>
                        <div key="9">
                            <Button onClick={() => { setPage(1) }} size='large' type='link' className='mt-3 w-full'>
                                شماره اشتباهه؟
                            </Button>
                        </div>
                    </div>}
                    {/* {page === 1 ? [
                        <p key="1" className='mb-10'>
                            درود!
                            <br />
                            شماره موبایل یا ایمیل را وارد کن تا ک کنی ورود
                        </p>,
                        <div key="2">
                            <ConfigProvider direction='ltr' >
                                <Form.Item
                                    key="2"
                                    rules={[
                                        {
                                            required: true,
                                            message: "میشه اینو خالی نذاری؟"
                                        }
                                    ]}
                                    name="esagfv"
                                >
                                    <Input size='large' placeholder='ایمیل یا شماره موبایل' />
                                </Form.Item>
                            </ConfigProvider>
                        </div>
                        ,
                        <div key="3">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                ورود یا ثبت نام
                            </Button>
                        </div>,

                        <p key="4" className='text-xs mt-4 text-center'>
                            ورود شما به منزله پذیرش شرایط RopoModa و قوانین حریم‌خصوصی است
                        </p>
                    ] : [
                        <p key="5" className='mb-6'>
                            یه کد برات فرستادیم
                        </p>,
                        <div key="6" className='flex flex-row'>

                            {[...Array(5)].map((value, index) => <div key={index} className="mx-3" >
                                <Input className='text-center' size='large' placeholder={`${5 - index}`} />
                            </div>)}

                        </div>,
                        <a key="7" size='large' type='link' className='mt-2 text-right text-xs'>
                            {timer === 0 ?
                                <>ارسال مجدد کد تایید</> :
                                <> ارسال کد تایید بعد از {timer} ثانیه</>}
                        </a>,
                        <div key="8">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                تایید
                            </Button>
                        </div>,
                        <div key="9">
                            <Button onClick={() => { setPage(1) }} size='large' type='link' className='mt-3 w-full'>
                                شماره اشتباهه؟
                            </Button>
                        </div>,
                    ]} */}
                </QueueAnim>
            </Form>
        </Modal>
    )
}

export default Home
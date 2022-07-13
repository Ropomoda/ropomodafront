import { Button, ConfigProvider, Form, Input, Modal, notification, Statistic } from 'antd'
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import React, { useEffect, useRef, useState } from 'react'
import { getS3Image, isValueHollow, persianNumber } from '../../utils/utils';
import * as R from 'ramda';
import Image from 'next/image';

const Home = ({ visible, onOk, onCancel }) => {
    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [canReSendSMS, setCanReSendSMS] = useState(false);
    const [renderPage, setRenderPage] = useState(true);
    const timeToResend = Date.now() + 2 * 60 * 1000;

    const { Countdown } = Statistic;
    const sendVerifySMS = () => {
        setCanReSendSMS(false);
    }
    const loginHandler = async () => {
        setLoading(true);
        try {
            const fields = await loginForm.validateFields();
            notification.success({
                message: 'کد تایید',
                description:
                    `کد تایید به ${persianNumber(fields["mobile"])} ارسال شد.`,
                placement: "bottomLeft",
                duration: 5
            });
            setCanReSendSMS(false);
            changePage(2);
        } catch (err) {
            notification.error({
                message: 'خطا',
                description: "لطفا شماره موبایل خود را وارد کنید.",
                placement: "bottomLeft",
                duration: 5
            });
            console.log(err);
        }
        setLoading(false);
    }

    const changePage = (page, anime = true) => {
        // anime && setRenderPage(false);
        setPage(page);
    }
    return (
        <Modal
            visible={visible}
            onCancel={onCancel}
            closable
            transitionName=''
            title={
                <div className='flex flex-row items-center'>
                    <Image src={getS3Image("ropomoda-logo-r.svg")} width={50} height={50} alt="روپومدا" />
                    <span className='mr-2' >
                        ورود | ثبت نام
                    </span>
                </div>
            }
            centered
            maskStyle={{ backgroundColor: "#F9AFEC" }}
            maskClosable={false}
            footer={null}
        >
            <Form onSubmitCapture={loginHandler} form={loginForm} >
                <QueueAnim
                    onAnimationEnd={() => {
                        setRenderPage(true);
                    }}
                    duration={500}
                    type="scale"
                    className='flex flex-col'>
                    <div key="0"></div>
                    {renderPage && page === 1 ? <div key="1">
                        <p key="1" className='mb-10'>
                            سلام دوست عزیز!
                            <br />
                            برای ورود یا ثبت نام لطفا شماره موبایل خود را وارد کنید.
                        </p>
                        <div key="2">
                            <Form.Item
                                key="2"
                                rules={[
                                    {
                                        validator: (role, value = '', callback) => {
                                            var phoneRe = /^0\d{10}$/;
                                            if (value.match(phoneRe)) {
                                                callback();
                                            }
                                            else {
                                                callback("لطفا شماره موبایل خود را به شکل صحیح وارد کنید. مثال: 09112223344");
                                            }
                                        }
                                    }
                                ]}
                                name="mobile"
                                validateTrigger={["onBlur"]}
                            >
                                <Input
                                    pattern="[0-9]*"
                                    inputmode="numeric"
                                    className='ltr'
                                    autoFocus
                                    size='large'
                                    placeholder='09112223344' />
                            </Form.Item>
                        </div>

                        <div key="3">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                ورود یا ثبت نام
                            </Button>
                        </div>

                        <p key="4" className='text-xs mt-4 text-center'>
                            ورود شما به منزله پذیرش شرایط RopoModa و قوانین حریم‌خصوصی است
                        </p>
                    </div> : undefined}

                    {renderPage && page === 2 ? <div key="1">
                        <p key="5" className='mb-6'>
                            یه کد برات فرستادیم
                        </p>
                        <div key="6" className='flex flex-row mb-3'>
                            <Input
                                autoFocus
                                className='text-center tracking-widest'
                                size='large'
                                placeholder={`- - - - -`}
                            />

                        </div>
                        <div key="7" className='mb-3'>
                            {canReSendSMS ?
                                <Button onClick={sendVerifySMS} type='link' className='text-right text-xs'>
                                    ارسال مجدد کد تایید
                                </Button> :
                                <div className='flex flex-row text-primary'>
                                    <span className='ml-1'>ارسال مجدد کد تایید بعد از</span>
                                    <Countdown
                                        value={timeToResend}
                                        format="m:ss"
                                        onFinish={() => setCanReSendSMS(true)}
                                        valueRender={(v) => <div
                                            className='text-primary text-base'>
                                            {v}
                                        </div>}
                                    />
                                </div>
                            }
                        </div>
                        <div key="8">
                            <Button htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                تایید
                            </Button>
                        </div>
                        <div key="9">
                            <Button
                                onClick={() => {
                                    changePage(1, false);
                                }}
                                size='large'
                                type='link' className='mt-3 w-full'>
                                شماره اشتباهه؟
                            </Button>
                        </div>
                    </div> : undefined}
                </QueueAnim>
            </Form>
        </Modal>
    )
}

export default Home
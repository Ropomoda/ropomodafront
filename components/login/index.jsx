import { Button, Card, Col, Form, Input, message, Modal, notification, Row, Statistic } from 'antd'
import React, { useState } from 'react'
import { getS3Image, persianNumber } from '../../utils/utils';
import Image from 'next/image';
import httpReq from '../../http_requests';
import { connect } from "react-redux";
import { loginWithOTPToken } from '../../actions/accountAction';
const { Countdown } = Statistic;

const Home = ({ visible, onOk, closeLogin, loginWithOTPToken }) => {
    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [canReSendSMS, setCanReSendSMS] = useState(false);
    const [renderPage, setRenderPage] = useState(true);
    const timeToResend = Date.now() + 2 * 60 * 1000;
    const [mobileNumber, setMobileNumber] = useState('');
    const sendVerifySMS = async (mobile) => {
        await httpReq.accountReq.sendOTPToken({
            mobile: mobile
        });
        setCanReSendSMS(false);
    }
    const getCompleteMobileNumber = (mobile) => {
        mobile = mobile.slice(1);
        return `+98${mobile}`
    }
    const loginHandler = async () => {
        setLoading(true);
        try {
            const fields = await loginForm.validateFields();
            if (page === 1) {
                const mobile = getCompleteMobileNumber(fields["mobile"]);
                await sendVerifySMS(mobile);
                setMobileNumber(mobile);
                notification.info({
                    message: 'کد تایید',
                    description:
                        `کد تایید به ${persianNumber(fields["mobile"])} ارسال شد.`,
                    placement: "top",
                    duration: 5
                });
                changePage(2,false);
            } else {
                const otpToken = fields["otpToken"];
                await loginWithOTPToken(mobileNumber, otpToken);
                closeLogin();
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    const changePage = (page, reset = false) => {
        reset && loginForm.resetFields();;
        setPage(page);
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-primary'>
            <Col>
                <Row>
                    <Card>
                        <div className='text-center flex flex-row justify-center items-center mb-5'>
                            <Image src={getS3Image("logo.svg")} width={40} height={40} alt="روپومدا" />
                            <h3 className='text-xl m-0 mr-2 '>
                                روپومدا
                            </h3>
                        </div>
                        <Form onSubmitCapture={loginHandler} form={loginForm} >
                            {page === 1 ? <div key="1">
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
                                    <Button loading={loading} htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                        ورود یا ثبت نام
                                    </Button>
                                </div>

                                <p key="4" className='text-xs mt-4 text-center'>
                                    ورود شما به منزله پذیرش شرایط Ropomoda و قوانین حریم‌خصوصی است
                                </p>
                            </div> : undefined}

                            {page === 2 ? <div key="1">
                                <p key="5" className='mb-6'>
                                    یه کد برات فرستادیم
                                </p>
                                <div key="6" className='flex flex-row mb-3'>
                                    <Form.Item
                                        key="2"
                                        name="otpToken"
                                        validateTrigger={["onBlur"]}
                                        className="w-full"
                                    >
                                        <Input
                                            autoFocus
                                            className='text-center tracking-widest'
                                            size='large'
                                            placeholder={`- - - - -`}
                                        />
                                    </Form.Item>
                                </div>
                                <div key="7" className='mb-3'>
                                    {canReSendSMS ?
                                        <Button onClick={() => { sendVerifySMS(mobileNumber) }} type='link' className='text-right text-xs'>
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
                                    <Button
                                        loading={loading}
                                        htmlType='submit' size='large' type='primary' className='mt-3 w-full'>
                                        تایید
                                    </Button>
                                </div>
                                <div key="9">
                                    <Button
                                        onClick={() => {

                                            changePage(1, true);
                                        }}
                                        size='large'
                                        type='link' className='mt-3 w-full'>
                                        شماره اشتباهه؟
                                    </Button>
                                </div>
                            </div> : undefined}
                        </Form>
                    </Card>
                </Row>
            </Col>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginWithOTPToken: (mobile, OTPToken) => dispatch(loginWithOTPToken(mobile, OTPToken)),
    }
};
export default connect(undefined, mapDispatchToProps)(Home)
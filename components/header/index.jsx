import { Badge, Button, ConfigProvider, Input, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from '../login';
import BasketDrawer from '../basket/basketDrawer';
import stickybits from "stickybits";


function Home() {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [basketDrawerVisible, setBasketDrawerVisible] = useState(false);
    const loginModalClickHandler = (status = false) => {
        setLoginModalVisible(status);
    }
    const basketDrawerClickHandler = (status = false) => {
        setBasketDrawerVisible(status);
    }

    useEffect(() => {
        stickybits(
            '#header-wrapper'
        );
    }, []);


    return (
        <>
            <div id="header-wrapper" className="bg-white z-20">
                <header>
                    <div className="px-5 flex flex-row items-center justify-between pt-3 pb-2">
                        <div className="flex flex-row items-center sm:w-1/3 w-full">
                            <Link href="/">
                                <Image
                                    className="cursor-pointer"
                                    src="/RopoModa.png"
                                    width={270}
                                    height={75}
                                    alt="ropomoda" />
                            </Link>
                            <Input
                                dir="rtl"
                                enterButton={null}
                                suffix={
                                    <i className="fal fa-search" />
                                }
                                size="large"
                                placeholder="دنبال چ میگردی؟" />
                        </div>
                        <div className="hidden sm:block">
                            <Button className="mr-2" onClick={() => { loginModalClickHandler(true) }} size="large" type="primary">
                                <i className="fal fa-user ml-2"></i>
                                ورود یا ثبت‌نام
                            </Button>
                            <Badge size="small" count={'۱'} offset={[35, 30]} >
                                <Tooltip title="سبد خرید" >
                                    <Button onClick={() => { basketDrawerClickHandler(true) }} className="mr-2" type="link" size="large">
                                        <i className="fal fa-shopping-bag text-black"></i>
                                    </Button>
                                </Tooltip>
                            </Badge>
                        </div>
                    </div>
                </header>
            </div>
            <Login visible={loginModalVisible} onCancel={() => { loginModalClickHandler(false) }} />
            <BasketDrawer
                visible={basketDrawerVisible}
                onClose={() => { basketDrawerClickHandler(false) }}
            />
        </>
    )
}

export default Home
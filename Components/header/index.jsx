import { Badge, Button, ConfigProvider, Input, Tooltip } from "antd"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from '../login';

function Home() {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const loginModalClickHandler = (status = false) => {
        setLoginModalVisible(status);
    }
    return (
        <>
            <header>
                <div className="container mx-auto flex flex-row justify-between mt-3 mb-2">
                    <div className="flex flex-row items-center w-1/3">
                        <Link href="/">
                            <Image className="cursor-pointer" src="/ropomoda.svg" width={250} height={100} alt="ropomoda" />
                        </Link>
                        <Input
                            placeholder="دنبال چ میگردی؟"
                            size="large"
                        />
                    </div>
                    <div>
                        <Link href="/admin">
                            <Tooltip title="ادمین فعال است" >
                                <Button type="ghost" size="large">
                                    <i className="far fa-eye"></i>
                                </Button>
                            </Tooltip>
                        </Link>
                        <Button className="mr-2" onClick={() => { loginModalClickHandler(true) }} size="large" type="primary">
                            <i className="fal fa-user ml-2"></i>
                            ورود یا ثبت‌نام
                        </Button>
                        <Badge count={'۱'} offset={[35, 30]} >
                            <Link href="/basket">
                                <Tooltip title="سبد خرید" >
                                    <Button className="mr-2" type="link" size="large">
                                        <i className="fal fa-shopping-bag text-black"></i>
                                    </Button>
                                </Tooltip>
                            </Link>
                        </Badge>
                    </div>
                </div>
            </header>
            <Login visible={loginModalVisible} onCancel={() => { loginModalClickHandler(false) }} />
        </>
    )
}

export default Home
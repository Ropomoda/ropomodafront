import { Badge, Button, ConfigProvider, Input } from "antd"
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
                        <h1 className="mb-0 ml-4">RopoModa</h1>
                        <Input
                            placeholder="دنبال چ میگردی؟"
                            size="large"
                        />
                    </div>
                    <div>
                        <Button onClick={() => { loginModalClickHandler(true) }} size="large" type="primary">
                            <i className="fal fa-user"></i>
                        </Button>
                        <Badge count={'۱'} offset={[35, 30]} >
                            <Button className="mr-2" type="link" size="large">
                                <i className="fal fa-shopping-bag text-black"></i>
                            </Button>
                        </Badge>
                    </div>
                </div>
            </header>
            <Login visible={loginModalVisible} onCancel={() => { loginModalClickHandler(false) }} />
        </>
    )
}

export default Home
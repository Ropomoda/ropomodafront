import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Input, Menu } from "antd"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stickybits from "stickybits";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function Home() {
    useEffect(() => {
    }, []);

    return (
        <div id="navbar-wrapper" className="bg-white z-20 hidden sm:block">
            <navbar>
                <div className="container mt-5 mx-auto">
                    <Menu mode="horizontal" >
                        <Menu.SubMenu key="SubMenu" title="دسته بندی ها" icon={<i className="fal fa-bars" />}>
                            <Menu.Item key="blooz">
                                <Link href="/search">
                                    بلوز و شومیز
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="taap">
                                تاپ و تیشرت
                            </Menu.Item>
                            <Menu.Item key="mantoo">
                                مانتو و پانچو
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="mail" icon={<i className="fal fa-badge-percent" />}>
                            محصولات حراجی!
                        </Menu.Item>
                        <Menu.Item key="two" icon={<i className="fal fa-bullhorn"></i>}>
                            پرفروش ترین ها
                        </Menu.Item>
                        <Menu.Item key="trhee" icon={<i className="fal fa-hourglass-end"></i>}>
                            تک سایز ها
                        </Menu.Item>
                    </Menu>
                </div>
                <hr className="divider" />
            </navbar>
        </div>
    )
}

export default Home
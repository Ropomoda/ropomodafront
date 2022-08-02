import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons"
import { Badge, Button, ConfigProvider, Input, Menu } from "antd"
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
                <div className="px-3">
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
                            <Link href="/search">
                                محصولات حراجی!
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="two" icon={<i className="fal fa-bullhorn"></i>}>
                            <Link href="/search">
                                پرفروش ترین ها
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="trhee" icon={<i className="fal fa-hourglass-end"></i>}>
                            <Link href="/search">
                                تک سایز ها
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <hr className="divider" />
            </navbar>
        </div>
    )
}

export default Home
import { Badge, Button, ConfigProvider, Input, Popover, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Login from '../login';
import BasketDrawer from '../basket/basketDrawer';
import stickybits from "stickybits";
import { connect } from "react-redux";
import { getS3Image } from "../../utils/utils";
import { logout } from "../../actions/accountAction";


function Home({ account, logout }) {
    const { token = null, profile } = account || {};
    const { name = "" } = profile || {};
    console.log(account);
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
            <div id="header-wrapper" className="bg-white z-20 container mx-auto">
                <header>
                    <div className="flex flex-row items-center justify-end sm:justify-between pt-2 sm:pt-3 pb-2">
                        <div className="flex-row">
                            {!!token ? <>
                                <Popover
                                    content={<div>
                                        <Link href="/user/profile">
                                            <a size="large" className="w-full" type="link">
                                                <span className="w-full text-black flex justify-between items-center my-3">
                                                    <span>
                                                        حساب کاربری
                                                    </span>
                                                    <i className="fal fa-user" />
                                                </span>
                                            </a>
                                        </Link>
                                        <a size="large" className="w-full" type="link">
                                            <span className="w-full text-black flex justify-between items-center my-3">
                                                <span>
                                                    روپوکلاب
                                                </span>
                                                <span className="soon-badge">
                                                    بزودی
                                                </span>
                                            </span>
                                        </a>
                                        <a onClick={() => { logout() }} size="large" className="w-full" type="link">
                                            <span className="w-full text-black flex justify-between items-center my-3">
                                                <span>
                                                    خروج
                                                </span>
                                                <i className="fal fa-door-open" />
                                            </span>
                                        </a>
                                    </div>}
                                    title={<p>{name} عزیز</p>}
                                    trigger="click"
                                    placement="bottomLeft"
                                >
                                    <Button className="mr-2" size="large">
                                        <i className="fal fa-user mx-1"></i>
                                    </Button>
                                </Popover>
                                <Link href="/user/wishlist">
                                    <Tooltip title="علاقه‌مندی ها" >
                                        <Button className="mr-2" size="large">
                                            <i className="fal fa-heart text-black mx-1"></i>
                                        </Button>
                                    </Tooltip>
                                </Link>
                                <Badge size="small" count={'۱'} offset={[35, 30]} >
                                    <Tooltip title="سبد خرید" >
                                        <Button onClick={() => { basketDrawerClickHandler(true) }} className="mr-2 sm:block hidden" size="large">
                                            <i className="fal fa-shopping-bag text-black mx-1"></i>
                                        </Button>
                                    </Tooltip>
                                </Badge>
                            </> : <>
                                <Link href="/user/login">
                                    <Button className="mr-2" size="large">
                                        <i className="fal fa-user ml-2"></i>
                                        ورود یا ثبت‌نام
                                    </Button>
                                </Link>
                                <Badge size="small" count={'۱'} offset={[35, 30]} >
                                    <Tooltip title="سبد خرید" >
                                        <Button onClick={() => { basketDrawerClickHandler(true) }} className="mr-2 sm:block hidden" size="large">
                                            <i className="fal fa-shopping-bag text-black mx-1"></i>
                                        </Button>
                                    </Tooltip>
                                </Badge>
                            </>}
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="hidden sm:block">
                                <Link href="/">
                                    <Image
                                        className="cursor-pointer"
                                        src={getS3Image("ropomoda.svg")}
                                        width={270}
                                        height={75}
                                        alt="ropomoda" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <BasketDrawer
                visible={basketDrawerVisible}
                onClose={() => { basketDrawerClickHandler(false) }}
            />
        </>
    )
}
const mapStateToProps = (state, ownProps) => ({
    account: state?.account,
});
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
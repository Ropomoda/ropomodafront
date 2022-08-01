import { Tooltip } from "antd";
import { TabBar } from "antd-mobile";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './styles.module.scss';


const BottomTabs = () => {
    let active = "/";
    if (typeof window !== "undefined") {
        active = window ? window?.location?.pathname : "/";
    }
    const router = useRouter()

    const setRouteActive = (value) => {
        router.push(value);
    }
    const getTabIcon = (key, iconKey, title = "") => {
        return <Tooltip title={title}>
            <i className={`fa${key === active ? "s" : "l"} fa-${iconKey} text-2xl`} />
        </Tooltip>
    }

    const tabs = [
        {
            key: '/',
            icon: getTabIcon("/", "home", "روپومدا"),
        },
        {
            key: '/user/cart',
            icon: getTabIcon("/user/cart", "shopping-bag", "سبد خرید"),
        },
        {
            key: '/user/profile',
            icon: getTabIcon("/user/profile", "user", "پروفایل"),
        },
    ]

    return (
        <div className={`fixed bottom-0 w-full bg-white z-20 ${styles["bottom-tabs-wrapper"]} py-1`}>
            <TabBar className="py-3" safeArea activeKey={active} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item?.key}
                        icon={item.icon}
                        badge={item?.badge || undefined} />
                ))}
            </TabBar>
        </div >
    )
}

export default BottomTabs;
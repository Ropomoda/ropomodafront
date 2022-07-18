import { TabBar } from "antd-mobile";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './styles.module.scss';


const BottomTabs = () => {
    const [active, setActive] = useState("/home");
    const router = useRouter()

    const setRouteActive = (value) => {
        router.push(value);
        setActive(value);
    }
    const getTabIcon = (key, iconKey) => {
        return <i className={`fa${key === active ? "s" : "l"} fa-${iconKey}`} />
    }
    
    const tabs = [
        {
            key: '/',
            title: 'روپومدا',
            icon: getTabIcon("/home", "home"),
        },
        {
            key: '/categories',
            title: 'دسته‌بندی ها',
            icon: getTabIcon("/categories", "list"),
        },
        {
            key: '/user/basket',
            title: 'سبد خرید',
            icon: getTabIcon("/basket", "shopping-bag"),
        },
        {
            key: '/user/profile',
            title: 'پروفایل',
            icon: getTabIcon("/profile", "user"),
        },
    ]

    return (
        <div className={`fixed bottom-0 w-full bg-white z-20 ${styles["bottom-tabs-wrapper"]} py-1`}>
            <TabBar safeArea activeKey={active} onChange={value => setRouteActive(value)}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                        badge={item?.badge || undefined} />
                ))}
            </TabBar>
        </div>
    )
}

export default BottomTabs;
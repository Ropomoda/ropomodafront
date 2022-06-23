import ShopLayout from '../components/layout/shopLayout';
import { Card, Row, Col, Breadcrumb, Collapse, Button, Switch, Divider } from 'antd';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        if (!window.location.href.endsWith("/404")) {
            window.location.href = "/404";
        }
    }, []);

    return (
        <ShopLayout>
            <h1 className='flex justify-center items-center pt-10'>
                <span className='font-black text-8xl ml-5'>404</span>
                کجا داری میری؟
            </h1>
            <div className='flex justify-center items-center pt-10 pb-10'>
                <Link href="/">
                    <Button className='mx-1'>
                        میرم خونه
                    </Button>
                </Link>
                <Link href="/search">
                    <Button className='mx-1'>
                        میرم خرید
                    </Button>
                </Link>
                <Link href="/profile">
                    <Button className='mx-1'>
                        میرم پروفایلمو ببینم
                    </Button>
                </Link>
                <Button className='mx-1'>
                    سورپرایزم کن!
                </Button>
            </div>

        </ShopLayout>
    )
}

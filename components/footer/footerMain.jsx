import Image from "next/image";
import Link from "next/link";
import { getS3Image } from "../../utils/utils";

function BoxLinkItem({ title, link = "", target = "_self" }) {
    return <div className="pt-3">
        <Link href={link}>
            <a className="text-gray-400" target={target}>
                {title}
            </a>
        </Link>
    </div>
}
function FooterLinkBox({ title, items }) {
    return <div className="link-box w-full">
        <p className="mb-2 text-lg text-gray-500">{title}</p>
        {items.map((item, index) => <BoxLinkItem key={index} {...item} />)}
    </div>
}

const footerLinkBoxes = [
    {
        title: "روپومدا",
        items: [
            {
                title: "قوانین و مقررات",
                link: "/terms"
            },
            {
                title: "مسیر روپومدا",
                link: "/roadmap"
            },
            {
                title: "فرصت های شغلی",
                link: "#"
            },
            {
                title: "درباره ما",
                link: "/about-us"
            },

        ]
    },
    {
        title: "سرویس‌ها",
        items: [

            {
                title: "بلاگ",
                link: "https://www.blog.ropomoda.com",
                target: "_black"
            },
            {
                title: "شرایط استفاده",
                link: "/terms-of-service"
            },
            {
                title: "حریم خصوصی",
                link: "/privacy"
            },
            {
                title: "گزارش مشکل",
                link: "/report-issue"
            },
        ]
    },
    {
        title: "راهنما و پشتیبانی",
        items: [
            {
                title: "سوالات متدوال",
                link: "/faq"
            },
            {
                title: "تماس با پشتیبانی",
                link: "/faq"
            },
            {
                title: "نحوه ثبت سفارش",
                link: "#"
            },
            {
                title: "شرایط و رویه مرجوعی",
                link: "/about-us"
            },
        ]
    },
];
function FooterMain() {
    return (
        <div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center">
                {footerLinkBoxes.map((boxInfo, index) => <FooterLinkBox
                    {...boxInfo}
                    key={index} />)}
                <div className="w-full flex flex-col items-center my-4 sm:mx-5">
                    <a href="mailto:support@ropomoda.com" className="w-72 text-lg my-2 flex flex-row items-center justify-between text-black border-solid border-1 border-gray-300 rounded-2xl px-6 py-2">
                        customer@ropomoda.com
                        <i className="fal fa-envelope mr-3" />
                    </a>
                    <a href="sms:+9830004523946130" className="w-72 text-lg my-2 flex flex-row items-center justify-between text-black border-solid border-1 border-gray-300 rounded-2xl px-6 py-2">
                        30004523946130
                        <i className='fal fa-sms mr-3' />
                    </a>
                    <a href="tel:+984533536219" className="w-72 text-lg my-2 flex flex-row items-center justify-between text-black border-solid border-1 border-gray-300 rounded-2xl px-6 py-2">
                        33536219 (045)
                        <i className='fal fa-phone mr-3' />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image layout="fixed" src={getS3Image("logo.svg")} width={80} height={80} className="rounded-xl" />
                    <div className="flex flex-col mt-2">
                        <p className="text-black bold my-0 py-0 mt-2">
                            حــــس خـــوب
                        </p>
                        <p className="text-black bold my-0 py-0 mt-2">
                            بــــــــــا یـــــــــک
                        </p>
                        <p className="text-black bold my-0 py-0 mt-2">
                            خــــرید خـــوب
                        </p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default FooterMain
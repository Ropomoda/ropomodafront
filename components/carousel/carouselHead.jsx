import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function carouselHead({ title, type }) {
    return (
        <div className="h-full flex flex-col items-start justify-between">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <span className="text-2xl font-black mb-4">{title}</span>
            </div>
            <Link href="/search">
                <button className={`text-light flex flex-row justify-center items-center`}>
                    مشاهده همه
                    <i className="fal fa-angle-left mr-2 text-xl" />
                </button>
            </Link>
        </div>
    )
}

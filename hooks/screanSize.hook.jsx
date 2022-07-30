import { useEffect, useState } from "react";

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window) {
            setIsMobile(checkIsMobile());
            window.addEventListener("resize", () => {
                setIsMobile(checkIsMobile());
            });
        }
    }, []);
    return { isMobile };
};

const checkIsMobile = () => {
    if (window) {
        let deviceWidth =
            window.innerWidth > 0 ? window.innerWidth : window.screen.width;
        if (deviceWidth <= 990) {
            return true;
        } else {
            return false;
        }
    }
};

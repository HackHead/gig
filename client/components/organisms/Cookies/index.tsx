'use client';

import { useEffect, useState } from 'react';

export interface CookiesProps {
    title: string;
    body: string;
    read: string;
    manage: string;
    accept: string;
}

const Cookies = ({ title, body, read, manage, accept }: CookiesProps) => {
    const [cookiesAccepted, setCookiesStatus] = useState<boolean | null>(null);

    const acceptCookies = () => {
        localStorage.setItem('cookies-accepted', 'true');
        setCookiesStatus(true);
    };

    useEffect(() => {
        const localStorageCookies = localStorage.getItem('cookies-accepted');
        setCookiesStatus(!!localStorageCookies);
    }, []);

    if (cookiesAccepted === null || cookiesAccepted) {
        return null;
    }

    return (
        <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 left-12 bottom-16  rounded-2xl z-20">
            <h2 className="font-semibold text-gray-800 ">🍪 {title}</h2>

            <p className="mt-4 text-sm text-gray-600">
                {body}{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    {read}
                </a>{' '}
            </p>

            <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                <button className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
                    {manage}
                </button>

                <button
                    className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                    onClick={acceptCookies}
                >
                    {accept}
                </button>
            </div>
        </section>
    );
};

export default Cookies;

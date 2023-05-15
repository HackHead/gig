'use client'
import { useState } from "react";


const Cookies = () => {
    const [cookiesAccepted, setCookiesStatus] = useState(false);

    
    return (
        <>
            {
                !cookiesAccepted &&
                    <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 left-12 bottom-16  rounded-2xl z-20">
                        <h2 className="font-semibold text-gray-800 ">🍪 Cookie Notice</h2>
            
                        <p className="mt-4 text-sm text-gray-600">We use cookies to ensure that we give you the best experience on our website. <a href="#" className="text-blue-500 hover:underline">Read cookies policies</a>. </p>
            
                        <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
                            <button className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none">
                                Manage your preferences
                            </button>
            
                            <button 
                                className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
                                onClick={() => {setCookiesStatus(true)}}
                            >
                                Accept
                            </button>
                        </div>
                    </section>
            }
        </>
       
    )
}

export default Cookies;
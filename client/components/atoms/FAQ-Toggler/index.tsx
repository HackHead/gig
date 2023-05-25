'use client';

import { useState } from 'react';

export interface QA {
    question: string;
    answer: string;
}

const Toggler = ({ question, answer }: QA) => {
    const [isOpen, setVisibility] = useState(false);

    return (
        <>
            <div className="border-2 border-gray-100 rounded-lg ">
                <button
                    className="flex items-center justify-between w-full p-8"
                    onClick={() => {
                        setVisibility(!isOpen);
                    }}
                >
                    <h1 className="font-semibold text-gray-700 ">{question}</h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M18 12H6"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        )}
                    </span>
                </button>
                {isOpen && (
                    <>
                        <hr className="border-gray-200" />

                        <p className="p-8 text-sm text-gray-500 ">{answer}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Toggler;

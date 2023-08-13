import '@/assets/styles/components/navigation.scss';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

export interface NavDropDownItem {
    title: string;
    dest: string;
    icon: ReactNode;
}

export interface MenuItemProps {
    title: string;
    dropDownItems?: Array<NavDropDownItem>;
}

const MenuItem = ({ title, dropDownItems }: MenuItemProps) => {
    return (
        <li className="relative cursor-pointer has-dropdown">
            <span className="flex items-center">
                <a
                    className="text-sm text-gray-400 hover:text-gray-500 ml-6"
                    href="#"
                >
                    {title}
                </a>
                <ChevronDownIcon
                    className={`h-3 w-3 ml-2 ${
                        dropDownItems?.length ? '' : 'hidden'
                    }`}
                />
            </span>

            {dropDownItems?.length && (
                <div className="dropdown absolute left-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl">
                    {dropDownItems?.map(({ icon, title, dest }) => {
                        return (
                            <Link
                                href={dest}
                                className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
                            >
                                {icon}

                                <span className="mx-1">{title}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </li>
    );
};

export default MenuItem;

"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const SocialIcons = [
    { icon: <FaFacebookF size={20} className="hover:text-blue-500 transition-colors" />, link: "https://facebook.com" },
    { icon: <FaLinkedinIn size={20} className="hover:text-blue-500 transition-colors" />, link: "https://linkedin.com" },
    { icon: <FaInstagram size={20} className="hover:text-blue-500 transition-colors" />, link: "https://instagram.com" },
    { icon: <FaTwitter size={20} className="hover:text-blue-500 transition-colors" />, link: "https://twitter.com" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Topbar with contact info and social icons */}
            <div className="hidden Topbar lg:flex bg-[#182145] justify-between items-center px-6">
                <ul className="flex items-center gap-8 text-white">
                    <li className="border-r border-white px-6 py-1.5 flex items-center gap-2.5">
                        <FaPhoneAlt size={18} />
                        +92-3312096750
                    </li>
                    <li className="border-r border-white pr-5 py-1.5 flex items-center gap-2.5">
                        <IoMdMail size={17} />
                        syedmesumjaffary@gmail.com
                    </li>
                </ul>

                {/* Social Icons */}
                <ul className="flex items-center gap-4">
                    {SocialIcons.map((item, index) => (
                        <li className="border-l border-white py-2 pl-4 text-white">
                            <Link key={index} href={item.link}>
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Navigation Bar */}
            <nav className="relative bg-white shadow-lg px-0 lg:px-8 py-2 lg:flex justify-between items-center">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <img
                            src="/images/logo.svg"
                            alt="CorTech Solution"
                            className="h-[80px] object-contain"
                        />
                    </Link>
                </div>

                <button
                    className="absolute lg:hidden cursor-pointer top-8 right-8"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoClose size={28} /> : <LuMenu size={28} />}
                </button>

                {/* Menu Items */}
                <ul
                    className={`flex flex-col lg:flex-row lg:relative fixed top-0 left-0 h-full w-64 bg-gray-100 lg:bg-transparent font-medium text-[#333] text-lg lg:w-auto lg:space-x-8 lg:space-y-0 space-y-6 px-6 pt-32 lg:px-0 lg:pt-0 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                        }`}
                >
                    {/* Sidebar logo */}
                    <span className="lg:hidden flex items-center gap-2 text-xl font-extrabold absolute top-8 left-12 bg-gradient-to-r from-blue-900 to-gray-900 text-transparent bg-clip-text border-b-2 border-blue-900 pb-1">
                        CorTech Solution
                    </span>

                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/clients">Our Clients</Link>
                    </li>
                    <li className="lg:hidden">
                        <Link href="/clients">Contact us</Link>
                    </li>

                    {/* social Icons */}
                    <div className="flex lg:hidden absolute bottom-10 gap-4 px-4">
                        {SocialIcons.map((item, index) => (
                            <Link key={index} href={item.link} className="text-blue-950">
                                {item.icon}
                            </Link>
                        ))}
                    </div>


                </ul>

                {/* Contact Us Button */}
                <div className="hidden lg:flex items-center justify-center">
                    <button className="font-semibold text-xl bg-[#182145] text-white py-2.5 px-8 flex items-center gap-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                        Contact us
                        <FaPhoneAlt className="text-white font-bold" size={20} />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

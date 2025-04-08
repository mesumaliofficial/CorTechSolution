import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            {/* Topbar with contact info and social icons */}
            <div className="Topbar flex bg-[#182145] justify-between items-center px-6">
                <ul className="flex items-center gap-8 text-white">
                    <li className="border-r border-white px-6 py-1.5">+92-3312096750</li>
                    <li className="border-r border-white pr-5 py-1.5">syedmesumjaffary@gmail.com</li>
                </ul>

                {/* Social Icons */}
                <ul className="flex items-center gap-4">
                    <li className="border-l border-white p-2">
                        <Link href="https://twitter.com">
                            <FaTwitter size={20} className="text-white hover:text-blue-500 transition-colors" />
                        </Link>
                    </li>
                    <li className="border-l border-white p-2">
                        <Link href="https://facebook.com">
                            <FaFacebookF size={20} className="text-white hover:text-blue-600 transition-colors" />
                        </Link>
                    </li>
                    <li className="border-l border-white p-2">
                        <Link href="https://linkedin.com">
                            <FaLinkedinIn size={20} className="text-white hover:text-blue-700 transition-colors" />
                        </Link>
                    </li>
                    <li className="border-l border-white p-2">
                        <Link href="https://instagram.com">
                            <FaInstagram size={20} className="text-white hover:text-pink-500 transition-colors" />
                        </Link>
                    </li>
                </ul>

            </div>

            {/* Main Navigation Bar */}
            <nav className="lg:flex justify-between items-center bg-white shadow-lg px-8 py-2">
                <div className="px-4">
                    <Link href="/">
                        <img src="/images/logo.svg" alt="CorTech Solution" className="w-full h-[80px] object-contain" />
                    </Link>
                </div>

                {/* Menu Items */}
                <ul className="lg:flex font-medium text-[#333] text-lg space-x-8 items-center justify-center">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/clients">
                            Our Clients
                        </Link>
                    </li>
                </ul>

                {/* Contact Us Button */}
                <div className="flex items-center justify-center">
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

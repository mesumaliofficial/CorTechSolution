import Image from "next/image";
import logo from "../../public/images/logo.svg"
import { UserRoundPen } from 'lucide-react';

const Navbar = () => {
    return (
<nav className="flex justify-between items-center bg-gray-100 shadow-lg px-8">
        <div className="px-4">
            <a href="/">
            <Image src={logo} alt="CorTech Solution" className="w-full h-[80px]" />
            </a>
        </div>
        <ul className="flex font-[500] text-[#333] text-lg space-x-8 items-center justify-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Servies</a></li>
            <li><a href="/contact">Project</a></li>
            <li><a href="/contact">Our Clients</a></li>
        </ul>
        <div className="flex items-center justify-center">
            <button className="font-[500] text-xl bg-[#182145] text-white py-2.5 px-8 flex items-center gap-2.5">
                Contact us
                <UserRoundPen className="text-white font-bold" size={20} />
            </button>
        </div>
        </nav>
    );
    }

export default Navbar;
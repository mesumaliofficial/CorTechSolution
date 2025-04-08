import Image from "next/image";
import logo from "../../public/images/logo.svg"
import Link from "next/link";
import { UserRoundPen } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="lg:flex justify-between items-center bg-gray-100 shadow-lg px-8">
            <div className="px-4">
                <Link href="/">
                    <Image src={logo} alt="CorTech Solution" className="w-full h-[80px]" />
                </Link>
            </div>
            <ul className="lg:flex font-[500] text-[#333] text-lg space-x-8 items-center justify-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">Servies</Link></li>
                <li><Link href="/contact">Project</Link></li>
                <li><Link href="/contact">Our Clients</Link></li>
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
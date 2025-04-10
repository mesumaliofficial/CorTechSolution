import Navbar from "@/components/Navbar";
import Image from "next/image";
import banner from "../../public/images/banner.jpg";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
          <main className="relative h-[90vh] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <div className="absolute bg-black w-full h-full z-10 top-0 left-0 opacity-35"></div>
              <Image 
                src={banner} 
                alt="Cortech Solution banner" 
                className="z-0"
                priority
              />
            </div>
            
            <div className="relative text-white space-y-6 justify-center flex flex-col z-10 px-12 py-20 md:px-12 lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-100">
                Redefining Your <span className="text-yellow-400">Digital Future</span> with CorTech IT Solutions
              </h1>
              <p className="mt-4 text-lg text-white font-[500]">
                Custom Software Development | Web & Mobile Solutions | Digital Transformation
                Empowering Innovation for a Smarter Tomorrow
              </p>
            </div>
          </main>
      </header>
    </>
  );
}

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-2 h-[90vh] justify-between p-16 bg-gray-200">
        <div className="text-black space-y-4 items-center justify-center flex flex-col">
          <h1 className="text-5xl font-bold text-gray-900">
            Redefining Your <span className="text-blue-500">Digital Future</span> with CorTech IT Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Custom Software Development | Web & Mobile Solutions | Digital Transformation
            Empowering Innovation for a Smarter Tomorrow
          </p>
        </div>
        <div 
          className="relative bg-cover bg-center h-full rounded-lg"
          style={{ backgroundImage: "url('/images/banner1.png')" }}
        >
        </div>
      </main>
    </>
  );
}

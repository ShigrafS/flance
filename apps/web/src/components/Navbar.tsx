import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo-250x-80-1.png"
                alt="Go To ProSites"
                width={180}
                height={58}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-zinc-700 hover:text-[#2ca58d] font-medium transition-colors">Home</Link>
            <Link href="/our-process" className="text-zinc-700 hover:text-[#2ca58d] font-medium transition-colors">Our Process</Link>
            <Link href="/pricing" className="text-zinc-700 hover:text-[#2ca58d] font-medium transition-colors">Pricing</Link>
            <Link href="/add-on-services" className="text-zinc-700 hover:text-[#2ca58d] font-medium transition-colors">Add On Services</Link>
          </div>
          <div>
            <Link 
              href="/get-started" 
              className="bg-[#2ca58d] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#248f7a] transition-all shadow-lg shadow-[#2ca58d]/20"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

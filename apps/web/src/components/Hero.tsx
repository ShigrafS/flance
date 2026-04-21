import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-[#2ca58d] uppercase bg-[#2ca58d]/10 rounded-full">
              Lead Generation
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-tight mb-6">
              Websites Built For <span className="text-[#2ca58d]">Roofers</span> and Home Service Pros
            </h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
              Go To ProSites builds professional websites designed specifically for roofing and home service businesses — built to convert, priced monthly, and easy to get started.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ca58d]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#2ca58d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-zinc-700 font-medium">Built to generate and convert more leads</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ca58d]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#2ca58d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-zinc-700 font-medium">Unlimited website updates included</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ca58d]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#2ca58d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-zinc-700 font-medium">30-day money back guarantee</span>
              </div>
            </div>
            <Link 
              href="/pricing"
              className="inline-block bg-[#2ca58d] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#248f7a] transition-all transform hover:scale-105 shadow-xl shadow-[#2ca58d]/30"
            >
              Our Pricing
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-zinc-100">
              <div className="mb-6">
                <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Get started today</span>
                <h2 className="text-3xl font-bold text-zinc-900 mt-1">Let's Chat</h2>
              </div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Website Address" 
                  className="w-full px-5 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                />
                <button className="w-full bg-[#2ca58d] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#248f7a] transition-all mt-4">
                  Submit
                </button>
              </form>
            </div>
            {/* Abstract decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2ca58d]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

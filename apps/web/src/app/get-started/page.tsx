import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-zinc-900 mb-6">Let's Get Started</h1>
            <p className="text-xl text-zinc-600">
              Fill out the form below and we'll reach out to discuss your new professional website.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 lg:p-12 rounded-[2.5rem] border border-zinc-200 shadow-xl">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 000-0000"
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-1">Business Name</label>
                <input 
                  type="text" 
                  placeholder="Your Roofing Co."
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-zinc-700 ml-1">Tell us about your project</label>
                <textarea 
                  rows={4}
                  placeholder="I need a 10-page website for my roofing business..."
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-[#2ca58d] text-white py-5 rounded-xl font-bold text-xl hover:bg-[#248f7a] transition-all shadow-xl shadow-[#2ca58d]/20 mt-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="w-12 h-12 bg-[#2ca58d]/10 rounded-full flex items-center justify-center text-[#2ca58d] mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Call Us</h3>
              <p className="text-zinc-600">+1 (678) 888-2334</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="w-12 h-12 bg-[#2ca58d]/10 rounded-full flex items-center justify-center text-[#2ca58d] mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Email Us</h3>
              <p className="text-zinc-600">hello@gotoprosites.com</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="w-12 h-12 bg-[#2ca58d]/10 rounded-full flex items-center justify-center text-[#2ca58d] mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Office</h3>
              <p className="text-zinc-600">Canton, GA</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/assets/images/GoTo-ProSites-Web-Logo-3.png"
            alt="GoTo ProSites"
            width={150}
            height={150}
            className="mx-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <p className="mb-4">© 2025 | by Go To ProSites | All Rights Reserved</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms And Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

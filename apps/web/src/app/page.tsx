import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Welcome Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">
                  Welcome to GoTo ProSites - Where <span className="text-[#2ca58d]">Quality</span> Meets <span className="text-[#2ca58d]">Affordability</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    Your customers are searching online right now. If your website isn’t built to convert, you’re handing those jobs to your competitors.
                  </p>
                  <p>
                    We build fast, clean, lead-generating websites for roofers and home service pros across the U.S. You get a professional website, real SEO foundations, unlimited updates for 2 years, all at an affordable monthly price.
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/assets/images/welsome-to-Goto-ProSites-1.png"
                  alt="Welcome to GoTo ProSites"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h3 className="text-[#2ca58d] font-bold uppercase tracking-widest text-sm mb-4">What You Get</h3>
            <h2 className="text-4xl font-bold text-zinc-900">Better Website • Better Leads • Better Value.</h2>
            <p className="mt-4 text-xl text-zinc-600">Your business deserves a website that works as hard as you do.</p>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "A design you’ll be proud of",
                desc: "No more hiding your website or apologizing for it. We create clean, modern, high-impact designs built to convert visitors into jobs.",
                icon: "N"
              },
              {
                title: "SEO-ready for local visibility",
                desc: "We structure every site with strong SEO foundations so your business can get found in local searches and compete effectively.",
                icon: ""
              },
              {
                title: "Affordable monthly pricing",
                desc: "Your website pays for itself through results — while you pay monthly at a rate designed for real small business owners.",
                icon: ""
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-[#2ca58d]/10 rounded-2xl flex items-center justify-center text-[#2ca58d] text-3xl mb-8 group-hover:bg-[#2ca58d] group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0a2342] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-8 uppercase tracking-tight">Join the Pro Family</h2>
            <p className="text-xl text-zinc-300 mb-10">
              Stop building someone else's equity. Invest in your own digital assets with GoTo ProSites.
            </p>
            <Link 
              href="/get-started"
              className="inline-block bg-white text-[#0a2342] px-12 py-5 rounded-full font-black text-xl hover:bg-zinc-100 transition-all shadow-2xl"
            >
              GET STARTED NOW
            </Link>
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

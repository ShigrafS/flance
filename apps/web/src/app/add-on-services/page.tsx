import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AddOnServicesPage() {
  const services = [
    {
      title: "SMS Lead Notification",
      desc: "Receive instant SMS notifications for all your leads, in addition to your usual email alerts. Never miss an opportunity.",
      image: "/assets/images/SMS-lead-Notification.png",
      price: "One-time setup"
    },
    {
      title: "Email Newsletter Connection",
      desc: "Automatically import your new leads into your email newsletter software. Keep your audience informed and engaged.",
      image: "/assets/images/Email-Newsletter-connection.png",
      price: "One-time setup"
    },
    {
      title: "CRM Connection",
      desc: "Eliminate double data entry. Push lead data directly into your CRM, saving you time and ensuring no lead is missed.",
      image: "/assets/images/CRM-connection-Free.png",
      price: "Free Integration"
    },
    {
      title: "Local SEO Boost",
      desc: "Improve your local search presence and get found by customers in your area when they need your services most.",
      image: "/assets/images/Local-SEO-650-set-up-150-mo.png",
      price: "$650 setup + $150/mo"
    },
    {
      title: "Additional Pages",
      desc: "Need more pages? Add as many as you need to showcase services, testimonials, and more—whenever you need them.",
      image: "/assets/images/Additional-Pages-150-per-page.png",
      price: "$150 per page"
    },
    {
      title: "Display Reviews",
      desc: "Build trust by automatically displaying your latest customer reviews. Keeps your site fresh and relevant.",
      image: "/assets/images/Display-Reviews.png",
      price: "Included with plans"
    },
    {
      title: "Professional SEO Copywriting",
      desc: "Convert visitors into customers with keyword-optimized content specifically designed for home services.",
      image: "/assets/images/Copywriting-150-per-page.png",
      price: "$150 per page"
    },
    {
      title: "Social Media Management",
      desc: "Let us handle your social presence and ads to drive consistent traffic and leads to your business.",
      image: "/assets/images/Social-Media-With-Ads-1500-mo.png",
      price: "$1500/mo"
    },
    {
      title: "Custom Website",
      desc: "Need something unique? We build custom high-performance websites tailored exactly to your brand.",
      image: "/assets/images/Custom-Website-2500-one-time.png",
      price: "Starting at $2500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="bg-[#2ca58d]/5 py-24 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#2ca58d] font-bold tracking-widest uppercase text-sm mb-4 block">
                  Add-On Services
                </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-zinc-900 leading-tight mb-6">
                  Elevate Your Business with <span className="text-[#2ca58d]">GoTo ProSites</span>
                </h1>
                <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
                  Take your online presence further with our specialized add-ons. No hidden fees or subscription traps—just powerful tools to help you grow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/get-started"
                    className="inline-block bg-[#2ca58d] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#248f7a] transition-all shadow-xl shadow-[#2ca58d]/20"
                  >
                    Get Started
                  </Link>
                  <Link href="/pricing" className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20">
                    View Plans
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/assets/images/welsome-to-Goto-ProSites-1.png"
                  alt="Add On Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Transform Your Online Presence with Affordable Add-ons</h2>
              <p className="text-xl text-zinc-600">
                Designed specifically for roofers and home service professionals. One-time costs or completely free integrations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="group bg-white p-6 rounded-3xl border border-zinc-200 hover:border-[#2ca58d] transition-all hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-8">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mb-4">
                    <span className="text-[#2ca58d] font-bold text-sm bg-[#2ca58d]/10 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-[#2ca58d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <button className="flex items-center text-zinc-900 font-bold group-hover:translate-x-2 transition-transform">
                    Learn More <span className="ml-2">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                Affordable Websites Starting at <span className="text-[#2ca58d]">$195/mo</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Establish a strong online presence without breaking the bank. Start generating more leads today.
              </p>
              <Link 
                href="/get-started"
                className="inline-block bg-[#2ca58d] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#248f7a] transition-all transform hover:scale-105"
              >
                Get Started Now
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ca58d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2ca58d]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
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

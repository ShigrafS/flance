import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Basic Plan",
      price: "195",
      description: "A solid foundation for your online presence.",
      features: [
        "A Fully Managed Website",
        "5-Page Custom Site",
        "On-Page SEO Optimization",
        "Automated Email Response",
        "Unlimited Update Requests"
      ],
      cta: "Choose Plan",
      highlighted: false
    },
    {
      name: "Pro Plan",
      price: "250",
      description: "The perfect balance of power and value.",
      features: [
        "Everything Included in Basic",
        "10-Page Custom Website",
        "Automated SMS Notifications",
        "CRM Integration for Seamless Lead Management",
        "Optimization of Google My Business Page"
      ],
      cta: "Choose Plan",
      highlighted: true,
      tag: "Popular"
    },
    {
      name: "Premium Plan",
      price: "300",
      description: "For established pros ready to dominate.",
      features: [
        "Everything Included in Pro",
        "20-Page Custom Website",
        "Advanced Automation Features",
        "Premium Customer Support",
        "First in Line Priority Assistance"
      ],
      cta: "Choose Plan",
      highlighted: false
    }
  ];

  const addons = [
    {
      title: "Advanced On-Page SEO Growth Plan",
      desc: "Ongoing SEO improvements designed to increase rankings and organic leads.",
      image: "/assets/images/Advanced-SEO-Groth-1500-mo.png"
    },
    {
      title: "SMS Lead Notifications",
      desc: "With our Pro and Premium plans get instant text alerts when a new lead comes in.",
      image: "/assets/images/SMS-lead-Notification.png"
    },
    {
      title: "Email Newsletter Connection",
      desc: "Stay top-of-mind with past customers and prospects through email.",
      image: "/assets/images/Email-Newsletter-connection.png"
    },
    {
      title: "Professional SEO-Optimized Copywriting",
      desc: "Professionally written website content designed to rank and convert.",
      image: "/assets/images/Copywriting-150-per-page.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <section className="bg-[#2ca58d]/5 py-20 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-[#2ca58d] uppercase bg-[#2ca58d]/10 rounded-full">
                  Starting at $195 mo
                </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-zinc-900 leading-tight mb-6">
                  GoTo ProSites <span className="text-[#2ca58d]">Pricing</span>
                </h1>
                <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
                  Launch your website, start getting leads, and pay over time. Your Go To ProSite is built to earn its keep as you grow. Risk Free with our 30 Day Money Back Guarantee.
                </p>
                <Link 
                  href="/get-started"
                  className="inline-block bg-[#2ca58d] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#248f7a] transition-all transform hover:scale-105 shadow-xl shadow-[#2ca58d]/30"
                >
                  Get Started
                </Link>
              </div>
              <div className="relative flex justify-center">
                <Image 
                  src="/assets/images/roofer-pana.png"
                  alt="Pricing"
                  width={600}
                  height={600}
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zinc-900 mb-4">Simple Monthly Pricing That Works for Your Business</h2>
              <p className="text-xl text-zinc-600">Choose the plan that fits your growth goals.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div 
                  key={i} 
                  className={`relative p-8 rounded-3xl border ${
                    plan.highlighted 
                      ? "border-[#2ca58d] shadow-2xl scale-105 z-10 bg-white" 
                      : "border-zinc-200 bg-zinc-50"
                  }`}
                >
                  {plan.tag && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ca58d] text-white px-4 py-1 rounded-full text-sm font-bold">
                      {plan.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-black text-[#2ca58d]">${plan.price}</span>
                    <span className="text-zinc-500 ml-2">/ per month</span>
                  </div>
                  <p className="text-zinc-600 mb-8">{plan.description}</p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-[#2ca58d] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/checkout/sign?plan=${encodeURIComponent(plan.name)}`}
                    className={`block w-full py-4 rounded-xl font-bold text-lg text-center transition-all ${
                      plan.highlighted 
                        ? "bg-[#2ca58d] text-white hover:bg-[#248f7a]" 
                        : "bg-zinc-900 text-white hover:bg-zinc-800"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-zinc-500 leading-relaxed italic">
                Unlike many monthly website providers, you own your website with GoTo ProSites. Every plan includes a 24-month payment term, so you can spread out the cost while getting full access from day one. Hosting, maintenance, unlimited updates, and support are all included during that period.
              </p>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-24 bg-zinc-900 text-white rounded-[4rem] mx-4 sm:mx-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Enhance Your Site</h2>
              <p className="text-xl text-zinc-400">With Free & Affordable Add-ons</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addons.map((addon, i) => (
                <div key={i} className="bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700 hover:border-[#2ca58d] transition-all group">
                  <div className="mb-6 rounded-2xl overflow-hidden aspect-square relative">
                    <Image 
                      src={addon.image}
                      alt={addon.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{addon.title}</h4>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{addon.desc}</p>
                  <button className="text-[#2ca58d] font-bold text-sm hover:underline">
                    Learn More &gt;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Build Your Website Faster</h2>
            <p className="text-xl text-zinc-600 mb-10">
              Start your journey with GoTo ProSites today and get a website that actually works for your business.
            </p>
            <Link 
              href="/get-started"
              className="inline-block bg-[#2ca58d] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#248f7a] transition-all shadow-2xl"
            >
              Get Started Today
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

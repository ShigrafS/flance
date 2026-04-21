import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function OurProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Choose the Website Plan That Fits Your Business",
      desc: "Pick the plan that fits your business best. Plans are available on a 24-month payment term. If you prefer to pay upfront, just ask for the pay-in-full discount.",
      image: "/assets/images/Untitled-design-77-1.png",
      cta: "Pick Your Plan",
      href: "/pricing"
    },
    {
      number: "02",
      title: "Sign Up In Minutes",
      desc: "After picking your plan, you will be sent over to our easy to undersigning contract to read and sign then simply submit your payment details.",
      image: "/assets/images/15.png",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      number: "03",
      title: "Share Your Company Info",
      desc: "Complete our simple onboarding form, designed to gather all necessary details about your business in one go. This saves you time.",
      image: "/assets/images/14.png",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      number: "04",
      title: "We Build Your Site",
      desc: "Sit back and relax while our skilled team gets to work. Depending on your chosen package, expect your initial website draft within 1 to 3 weeks.",
      image: "/assets/images/13.png",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      number: "05",
      title: "Your Review & Request for Edits",
      desc: "Review your new website and provide any feedback. We’ll make sure it reflects your vision and showcases your services professionally.",
      image: "/assets/images/11.png",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      number: "06",
      title: "Launch Day",
      desc: "It’s showtime! We’ll point your domain to our servers and launch your website to the world, making it accessible for potential clients.",
      image: "/assets/images/10.png",
      cta: "Get Started",
      href: "/get-started"
    },
    {
      number: "07",
      title: "Ongoing Maintenance & Support",
      desc: "We host your site on premium servers, manage all necessary updates, and handle any issues that arise. Plus, enjoy unlimited update requests!",
      image: "/assets/images/12.png",
      cta: "Get Started",
      href: "/get-started"
    }
  ];

  const faqs = [
    {
      q: "How do I get started?",
      a: "Simply reach out to us, and we’ll help you select the best package for your needs. After that, you’ll receive a sign-up link, and you’ll be on your way!"
    },
    {
      q: "What does the onboarding process look like?",
      a: "You’ll complete a comprehensive form that takes about 5-7 minutes, providing us with everything we need to create your website."
    },
    {
      q: "When Will My Website Go Live?",
      a: "Most websites are completed and launched in around 30 days, once onboarding is finished."
    },
    {
      q: "What if I’m not satisfied?",
      a: "We stand behind our services. If you’re not happy within the first 30 days, we offer a full refund on your plan, no questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-zinc-900 py-24 text-center text-white mb-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
              Simplifying Your <span className="text-[#2ca58d]">Online Presence</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-0">
              Launch your professional website in just 30 days and start attracting more clients today!
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="space-y-32 mb-32">
          {steps.map((step, i) => (
            <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                    <Image 
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="text-8xl font-black text-[#2ca58d]/10 mb-4 block leading-none">
                    {step.number}
                  </span>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-6">{step.title}</h2>
                  <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                    {step.desc}
                  </p>
                  <Link 
                    href={step.href}
                    className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2ca58d] transition-all transform hover:-translate-y-1 shadow-lg shadow-zinc-900/20"
                  >
                    {step.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-zinc-600">Still have questions? We’re happy to help.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{faq.q}</h3>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Take the First Step Today!</h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              Don’t wait to enhance your online presence. Partner with GoTo ProSites and watch your business thrive!
            </p>
            <Link 
              href="/get-started"
              className="inline-block bg-[#2ca58d] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#248f7a] transition-all shadow-2xl"
            >
              Contact Us Today
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

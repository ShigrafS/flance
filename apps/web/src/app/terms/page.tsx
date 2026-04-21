import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose max-w-none text-zinc-600 space-y-6">
            <p>Last updated: December 2025</p>
            <p>
              By accessing or using GoTo ProSites, you agree to be bound by these Terms and Conditions.
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8">Service Terms</h2>
            <p>
              GoTo ProSites provides website development and management services. Our plans are typically based on a 24-month commitment unless otherwise specified.
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8">Payments</h2>
            <p>
              Monthly payments are due on the anniversary of your sign-up date. Failure to make payments may result in suspension of services.
            </p>
            <p>
              (This is a placeholder terms and conditions page. Please consult with a legal professional for a comprehensive policy.)
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 | by Go To ProSites | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none text-zinc-600 space-y-6">
            <p>Last updated: December 2025</p>
            <p>
              At GoTo ProSites, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or use our services.
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, sign up for a plan, or communicate with us. This may include your name, email address, phone number, and business details.
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mt-8">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to process payments.
            </p>
            <p>
              (This is a placeholder privacy policy. Please consult with a legal professional for a comprehensive policy.)
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

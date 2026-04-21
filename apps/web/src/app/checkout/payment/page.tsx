"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PaymentPage() {
  const router = useRouter();
  const [data, setData] = useState<{
    name: string;
    email: string;
    plan: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const name = sessionStorage.getItem("clientName");
    const email = sessionStorage.getItem("clientEmail");
    const plan = sessionStorage.getItem("selectedPlan");

    if (!name || !plan) {
      // If no data, redirect back to pricing
      router.push("/pricing");
      return;
    }

    setData({ name, email: email || "", plan });
  }, [router]);

  if (!data) return null;

  // Determine price based on plan
  let price = "195";
  if (data.plan.includes("Pro")) price = "250";
  if (data.plan.includes("Premium")) price = "300";

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Processing payment of $${price} for ${data.name}...`);
    // Here you would integrate Stripe or another payment processor
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-32">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Complete Your Payment</h1>
          <p className="text-xl text-zinc-600">You're almost there! Enter your payment details below.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Order Summary */}
          <div className="bg-zinc-900 text-white p-8 md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-zinc-400 font-bold uppercase tracking-wider text-sm mb-6">Order Summary</h3>
              <div className="mb-4 pb-4 border-b border-zinc-800">
                <p className="font-bold text-xl mb-1">{data.plan}</p>
                <p className="text-zinc-400 text-sm">Monthly Subscription (24 mos)</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-400">Subtotal</span>
                <span>${price}.00</span>
              </div>
              <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                <span className="text-zinc-400">Setup Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="font-bold text-lg">Total Due Today</span>
                <span className="text-3xl font-black text-[#2ca58d]">${price}</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 text-center">
                Secure 256-bit SSL encryption.<br/>
                Your credit card will be billed monthly.
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="p-8 md:p-10 md:w-2/3">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Payment Details</h3>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Name on Card</label>
                <input 
                  type="text" 
                  required 
                  defaultValue={data.name}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Card Number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required 
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all pl-12"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Expiry (MM/YY)</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">CVC</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#2ca58d] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#248f7a] transition-all shadow-xl shadow-[#2ca58d]/20 mt-8"
              >
                Pay ${price}
              </button>
            </form>
            
            <div className="mt-6 flex justify-center space-x-4 opacity-50 grayscale">
              {/* Payment method icons placeholder */}
              <div className="h-8 w-12 bg-zinc-200 rounded"></div>
              <div className="h-8 w-12 bg-zinc-200 rounded"></div>
              <div className="h-8 w-12 bg-zinc-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

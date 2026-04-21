"use client";

import Navbar from "@/components/Navbar";
import ContractText from "@/components/ContractText";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  const [data, setData] = useState<{
    name: string;
    email: string;
    signature: string;
    signatureType: string;
    plan: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const name = sessionStorage.getItem("clientName");
    const email = sessionStorage.getItem("clientEmail");
    const signature = sessionStorage.getItem("clientSignature");
    const signatureType = sessionStorage.getItem("signatureType") || "type";
    const plan = sessionStorage.getItem("selectedPlan");
    const date = sessionStorage.getItem("signDate");

    if (!name || !signature) {
      // If no data, redirect back to pricing or sign page
      router.push("/pricing");
      return;
    }

    setData({ name, email: email || "", signature, signatureType, plan: plan || "", date: date || "" });
  }, [router]);

  if (!data) return null; // or a loading spinner

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-32 print:bg-white print:pt-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Success Banner (Hidden on Print) */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-2xl text-center mb-8 print:hidden shadow-sm">
          <h2 className="text-2xl font-bold text-green-800 mb-2">You're done signing!</h2>
          <p className="text-green-700">
            Go To ProSites Website Design Contract - <strong>{data.name}</strong>
          </p>
        </div>

        {/* Action Buttons (Hidden on Print) */}
        <div className="flex justify-center space-x-4 mb-12 print:hidden">
          <button 
            onClick={() => window.print()} 
            className="bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-700 transition-colors shadow-sm"
          >
            Print or Save as PDF
          </button>
          <button 
            onClick={() => router.push("/checkout/payment")} 
            className="bg-[#2ca58d] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#248f7a] transition-all shadow-xl shadow-[#2ca58d]/20"
          >
            Proceed to Payment
          </button>
        </div>

        {/* Contract Document */}
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-zinc-100 print:shadow-none print:border-none print:p-0">
          <div className="flex justify-between items-start mb-10 border-b border-zinc-200 pb-8">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 mb-2">Go To ProSites Website Design Contract</h1>
              <p className="text-zinc-500">Client: <strong>{data.name}</strong></p>
              <p className="text-[#2ca58d] font-semibold mt-1">Plan: {data.plan}</p>
            </div>
            <div className="hidden sm:block">
               {/* Minimal Logo for print/display */}
               <div className="w-32 h-10 bg-zinc-100 rounded flex items-center justify-center text-zinc-400 font-bold text-xs">
                 GoTo ProSites
               </div>
            </div>
          </div>

          <div className="prose max-w-none text-zinc-600 space-y-6 text-sm mb-16">
            <ContractText />
          </div>

          <div className="grid sm:grid-cols-2 gap-12 mt-12 pt-12 border-t border-zinc-200">
            {/* Client Signature */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Client Signature</span>
              </div>
              <div className="h-24 flex items-end mb-2 border-b border-zinc-300 pb-2 w-full">
                {data.signatureType === "draw" ? (
                  <img src={data.signature} alt="Client Signature" className="max-h-20 w-auto" />
                ) : (
                  <h2 className="text-4xl text-zinc-900 w-full" style={{ fontFamily: "'Shadows Into Light', cursive, sans-serif" }}>
                    {data.signature}
                  </h2>
                )}
              </div>
              <div className="text-sm text-zinc-500 mt-2">
                <p>Signed by: <strong className="text-zinc-900">{data.name}</strong></p>
                <p>Email: {data.email}</p>
                <p>Date: {data.date}</p>
              </div>
            </div>

            {/* Provider Signature */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Provider Signature</span>
              </div>
              <div className="h-24 flex items-end mb-2 border-b border-zinc-300 pb-2 w-full">
                <h2 className="text-4xl text-zinc-900 w-full" style={{ fontFamily: "'Shadows Into Light', cursive, sans-serif" }}>
                  Sherry Bailey
                </h2>
              </div>
              <div className="text-sm text-zinc-500 mt-2">
                <p>Signed by: <strong className="text-zinc-900">Sherry Bailey</strong></p>
                <p>Company: GoTo ProSites</p>
                <p>Date: {data.date}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 p-6 rounded-xl border border-zinc-200 text-xs text-zinc-500 font-mono">
            <strong>Audit Trail</strong><br/>
            Document signed securely.<br/>
            Timestamp: {data.date}
          </div>
        </div>
      </div>
    </div>
  );
}

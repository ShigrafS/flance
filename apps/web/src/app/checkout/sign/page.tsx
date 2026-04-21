"use client";

import Navbar from "@/components/Navbar";
import ContractText from "@/components/ContractText";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, useRef, useEffect } from "react";

function SignForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "Basic Plan";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signatureType, setSignatureType] = useState<"type" | "draw">("type");
  const [typedSignature, setTypedSignature] = useState("");
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    // Set up canvas context
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000000";
      }
    }
  }, [signatureType]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault(); // Prevent scrolling on touch
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Check if canvas is empty
  const isCanvasEmpty = (canvas: HTMLCanvasElement) => {
    const blank = document.createElement("canvas");
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  };

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      alert("Please fill out your name and email.");
      return;
    }

    let finalSignatureData = "";
    
    if (signatureType === "type") {
      if (!typedSignature) {
        alert("Please type your signature.");
        return;
      }
      finalSignatureData = typedSignature;
    } else {
      if (canvasRef.current && isCanvasEmpty(canvasRef.current)) {
        alert("Please draw your signature.");
        return;
      }
      if (canvasRef.current) {
        finalSignatureData = canvasRef.current.toDataURL("image/png");
      }
    }
    
    // Store in sessionStorage
    sessionStorage.setItem("clientName", name);
    sessionStorage.setItem("clientEmail", email);
    sessionStorage.setItem("clientSignature", finalSignatureData);
    sessionStorage.setItem("signatureType", signatureType);
    sessionStorage.setItem("selectedPlan", plan);
    sessionStorage.setItem("signDate", new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));

    // Redirect to success page
    router.push("/checkout/success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-900">Go To ProSites Website Design Contract</h1>
        <p className="text-[#2ca58d] font-semibold mt-2">Selected Plan: {plan}</p>
      </div>

      <div className="prose max-w-none text-zinc-600 space-y-6 mb-12 text-sm">
        <ContractText />
      </div>

      <form onSubmit={handleSign} className="space-y-8 bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Your legal name</label>
            <input 
              type="text" 
              required 
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">Your email address</label>
            <input 
              type="email" 
              required 
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#2ca58d] transition-all bg-white"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold text-zinc-700">Please Confirm full name and signature.</label>
          
          <div className="flex space-x-4 mb-4">
            <button 
              type="button"
              onClick={() => setSignatureType("type")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                signatureType === "type" ? "bg-[#2ca58d] text-white" : "bg-white text-zinc-500 border border-zinc-300 hover:bg-zinc-100"
              }`}
            >
              Type Signature
            </button>
            <button 
              type="button"
              onClick={() => setSignatureType("draw")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                signatureType === "draw" ? "bg-[#2ca58d] text-white" : "bg-white text-zinc-500 border border-zinc-300 hover:bg-zinc-100"
              }`}
            >
              Draw Signature
            </button>
          </div>

          <div className="p-6 bg-white border border-zinc-300 rounded-xl">
            {signatureType === "type" ? (
              <input 
                type="text" 
                placeholder="Type your signature here..."
                value={typedSignature}
                onChange={(e) => setTypedSignature(e.target.value)}
                className="w-full text-3xl px-0 py-2 border-none focus:ring-0 text-zinc-900 border-b border-zinc-200 focus:border-[#2ca58d]"
                style={{ fontFamily: "'Shadows Into Light', cursive, sans-serif" }}
              />
            ) : (
              <div>
                <canvas 
                  ref={canvasRef}
                  width={600}
                  height={150}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-[150px] bg-zinc-50 border border-zinc-200 rounded-lg cursor-crosshair touch-none"
                />
                <div className="flex justify-end mt-2">
                  <button type="button" onClick={clearCanvas} className="text-sm text-red-500 hover:text-red-700">
                    Clear Canvas
                  </button>
                </div>
              </div>
            )}
            
            <p className="text-sm text-zinc-500 mt-4">
              I agree that I am <strong>{name || "..."}</strong> and I understand this is a legal representation of my signature.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 max-w-sm">
            By clicking "Agree & Sign", you are legally bound by this agreement.
          </p>
          <button 
            type="submit" 
            className="bg-[#2ca58d] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#248f7a] transition-all shadow-xl shadow-[#2ca58d]/20"
          >
            Agree & Sign
          </button>
        </div>
      </form>
    </div>
  );
}

export default function SignPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-32">
      <Navbar />
      <Suspense fallback={<div className="text-center">Loading contract...</div>}>
        <SignForm />
      </Suspense>
    </div>
  );
}

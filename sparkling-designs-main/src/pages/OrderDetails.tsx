import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import gsap from "gsap";

import {
  ArrowLeft,
  Package,
  Clock,
  Truck,
  Download,
  Receipt,
  CheckCircle2,
  AlertCircle,
  Hash
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getOrderSingleDetails } from "@/APi/ProductAPi";
import InvoicePDF from "@/data/Invoice";

const normalizeStatus = (status) => status ? status.toUpperCase() : "PENDING";
const statusPhases = ["PENDING", "SHIPPED", "DELIVERED"];

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [generating, setGenerating] = useState(false);
  const invoiceRef = useRef(null);

  const { data: order, isLoading, isError } = useQuery({
    queryKey: ["OrderSingleDetails", id],
    queryFn: () => getOrderSingleDetails({ id }),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const currentPhaseIndex = statusPhases.indexOf(normalizeStatus(order?.status));

  useEffect(() => {
    if (!order) return;
    const ctx = gsap.context(() => {
      gsap.from(".animate-up", { opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: "power4.out" });
      gsap.from(".pipeline-progress", { width: "0%", duration: 1.5, ease: "power3.inOut", delay: 0.5 });
    });
    return () => ctx.revert();
  }, [order]);

  if (isLoading) return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#D11C78] animate-spin"></div>
        <p className="text-gray-400 font-black text-[10px] tracking-[0.2em] uppercase">Fetching Order Details</p>
      </div>
    </div>
  );

  if (isError || !order) return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center max-w-md">
            <AlertCircle className="h-16 w-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black mb-2">Order Missing</h2>
            <p className="text-gray-500 mb-8 font-medium">This order might have been archived or the link is expired.</p>
            <button onClick={() => navigate("/orders")} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black">Back to Dashboard</button>
        </div>
    </div>
  );

  const handleGeneratePDF = async () => {
    if (!invoiceRef.current) return;
    setGenerating(true);
    const element = invoiceRef.current;
    const opt = {
      margin: 10,
      filename: `INV-${order.orderId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    await html2pdf().from(element).set(opt).save();
    setGenerating(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="lg:ml-64 min-h-screen flex flex-col">
        <div className="p-4 sm:p-6 lg:p-10 max-w-[1400px] mx-auto w-full space-y-6 lg:space-y-10">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-up">
            <div className="flex items-center gap-5">
              <button 
                onClick={() => navigate("/orders")}
                className="h-12 w-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all group"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:-translate-x-1 transition-transform" />
              </button>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <Hash className="h-3 w-3 text-[#D11C78]" />
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{order.orderId}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black tracking-tighter">Order <span className="text-[#D11C78]"> Information</span></h1>
              </div>
            </div>

            <button
              onClick={handleGeneratePDF}
              disabled={generating}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#D11C78] text-white rounded-2xl font-black text-sm shadow-xl shadow-[#D11C78]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {generating ? <div className="h-4 w-4 border-2 border-white/30 border-t-white animate-spin rounded-full" /> : <Download size={18} />}
              {generating ? "PREPARING..." : "DOWNLOAD INVOICE"}
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-10">
            
            {/* LEFT COLUMN: STATUS & ITEMS (8 Cols) */}
            <div className="xl:col-span-8 space-y-6 lg:space-y-10">
              
              {/* STATUS TRACKER */}
              <div className="bg-white rounded-[2.5rem] border border-gray-100 p-6 sm:p-10 shadow-sm animate-up">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-10">Journey Status</h3>
                
                <div className="relative flex justify-between">
                  {/* Progress Line */}
                  <div className="absolute top-7 left-0 w-full h-[3px] bg-gray-100 -z-0">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D11C78] to-purple-500 pipeline-progress"
                      style={{ width: `${(currentPhaseIndex / (statusPhases.length - 1)) * 100}%` }}
                    />
                  </div>

                  {statusPhases.map((phase, i) => {
                    const isActive = i <= currentPhaseIndex;
                    return (
                      <div key={phase} className="relative z-10 flex flex-col items-center gap-4 bg-white px-2">
                        <div className={cn(
                          "h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-700",
                          isActive ? "bg-[#D11C78] text-white shadow-lg shadow-[#D11C78]/30" : "bg-gray-50 text-gray-300 border border-gray-100"
                        )}>
                          {i === 0 && <Clock size={22} />}
                          {i === 1 && <Truck size={22} />}
                          {i === 2 && <CheckCircle2 size={22} />}
                        </div>
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-widest",
                          isActive ? "text-slate-800" : "text-gray-300"
                        )}>{phase}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ITEMS LIST */}
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden animate-up">
                <div className="px-8 py-6 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Package className="text-[#D11C78]" size={20} />
                     <h3 className="font-black text-lg">Shipment Manifest</h3>
                   </div>
                   <span className="bg-white px-4 py-1.5 rounded-full border border-gray-200 text-xs font-black">{order.items.length} SKU</span>
                </div>

                <div className="divide-y divide-gray-50">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 hover:bg-gray-50/50 transition-colors group">
                      <div className="h-24 w-24 rounded-[2rem] bg-white border border-gray-100 p-3 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                        <img src={item.productId?.image || "/placeholder.png"} className="h-full w-full object-contain" alt="product" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="sm:text-[17px] text-sm font-medium text-slate-800 leading-tight">{item.productId?.name}</h4>
                        <div className="flex items-center gap-4">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Qty: {item.quantity} Boxes</span>
                           <span className="h-1 w-1 rounded-full bg-gray-300" />
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">₹{item.pricePerBox.toLocaleString()} / Box</span>
                        </div>
                      </div>
                      <div className="sm:text-right pt-4 sm:pt-0 border-t sm:border-0 border-gray-100">
                         <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Line Total</p>
                         <p className="text-2xl font-black text-primary">₹{(item.quantity * item.pricePerBox).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SUMMARY (4 Cols) */}
            <div className="xl:col-span-4 space-y-6 lg:space-y-10 animate-up">
               <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-900/30 overflow-hidden sticky top-10">
                  <div className="p-8 sm:p-10 space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-whit rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                           <Receipt className="text-primary" />
                        </div>
                        <h3 className="text- font-black text-xl">Financials</h3>
                     </div>

                     <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                           <span className="text-slate-800 text-sm font-bold uppercase tracking-wider">Placed on</span>
                           <span className="text- font-black text-sm">{new Date(order.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/5">
                           <span className="text-slate-800 text-sm font-bold uppercase tracking-wider">Volume</span>
                           <span className="text- font-black text-sm px-3 py-1 bg-white/10 rounded-lg">{order.totalBoxes} Boxes</span>
                        </div>
                     </div>
                     <hr />

                     <div className="pt-6">
                        <p className="text-[#D11C78] font-black text-[12px] uppercase tracking-[0.3em] mb-2">Grand Total</p>
                        <div className="flex items-baseline gap-2">
                           <span className="text-2xl font-bold text-white/50">₹</span>
                           <span className="text-5xl sm:text-6xl font-black text- tracking-tighter italic">
                              {order.totalAmount.toLocaleString()}
                           </span>
                        </div>
                     </div>
                  </div>
                  
                  {/* Visual Accent */}
                  <div className="h-2 w-full bg-gradient-to-r from-[#D11C78] via-purple-500 to-blue-500" />
               </div>

               {/* HELP CARD */}
               <div className="bg-blue-50/50 border border-blue-100 rounded-[2.5rem] p-8">
                  <h4 className="font-black text-blue-900 mb-2 uppercase text-xs tracking-widest">Need Support?</h4>
                  <p className="text-blue-700/70 text-sm font-medium leading-relaxed">If there's a discrepancy in the manifest or billing, contact your regional manager immediately.</p>
               </div>
            </div>

          </div>
        </div>

        {/* HIDDEN PRINT COMPONENT */}
        <div className="hidden">
           <div ref={invoiceRef}>
              <InvoicePDF order={order} />
           </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
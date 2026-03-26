import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import gsap from "gsap";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";

import {
  ArrowLeft,
  Package,
  Clock,
  Truck,
  ShieldCheck,
  TrendingUp,
  FileText,
  AlertCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getOrderSingleDetails } from "@/APi/ProductAPi";
import InvoicePDF from "@/data/Invoice";

/* ---------------- helpers ---------------- */

const normalizeStatus = (status?: string) =>
  status ? status.toUpperCase() : "PENDING";

const statusPhases = ["PENDING", "SHIPPED", "DELIVERED"];

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [generating, setGenerating] = useState(false);

  const invoiceRef = useRef<HTMLDivElement>(null);

  /* ---------------- API (SINGLE ORDER) ---------------- */
  const {
    data: order,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["OrderSingleDetails", id],
    queryFn: () => getOrderSingleDetails({id}),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const currentPhaseIndex = statusPhases.indexOf(
    normalizeStatus(order?.status)
  );

  /* ---------------- GSAP ANIMATION (SINGLE useEffect) ---------------- */
  useEffect(() => {
    if (!order) return;

    const ctx = gsap.context(() => {
      // HEADER
      gsap.fromTo(
        ".od-header > *",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      // PIPELINE PROGRESS
      gsap.fromTo(
        ".pipeline-progress",
        { width: "0%" },
        {
          width:
            currentPhaseIndex <= 0
              ? "15%"
              : currentPhaseIndex === statusPhases.length - 1
              ? "100%"
              : `${(currentPhaseIndex / (statusPhases.length - 1)) * 100}%`,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // ITEMS LIST
      gsap.fromTo(
        ".order-item",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power1.out",
        }
      );

      // MOBILE PAGE REVEAL
      if (window.innerWidth < 768) {
        gsap.fromTo(
          "main",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [order, currentPhaseIndex]);

  /* ---------------- STATES ---------------- */

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading order details…</p>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
          <AlertCircle className="mx-auto mb-3 text-red-500" />
          <h2 className="text-lg font-semibold">Order Not Found</h2>
        </div>
      </div>
    );
  }

  /* ---------------- PDF ---------------- */

  const handleGeneratePDF = async () => {
    if (!invoiceRef.current) return;
    setGenerating(true);

    await html2pdf()
      .from(invoiceRef.current)
      .set({
        margin: 10,
        filename: `Invoice-${order._id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .save();

    setGenerating(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* <Sidebar /> */}
      {/* <MobileSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} /> */}

      <div className="lg:pl-64">
        {/* <Header searchValue={searchQuery} onSearchChange={setSearchQuery} /> */}

        <main className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-10 pb-28">

          {/* HEADER */}
          <div className="flex items-center gap-4 od-header">
            <button
              onClick={() => navigate("/orders")}
              className="h-12 w-12 bg-white rounded-xl border flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>

            <h1 className="text-lg sm:text-2xl font-semibold truncate">
              Order <span className="text-primary">{order.orderId}</span>
            </h1>
          </div>

          {/* DELIVERY PIPELINE */}
          <div className="bg-white rounded-2xl border shadow p-6 relative">
            <div className="flex justify-between relative z-10">
              {statusPhases.map((phase, i) => {
                const active = i <= currentPhaseIndex;
                return (
                  <div key={phase} className="flex flex-col items-center gap-2">
                    <div
                      className={cn(
                        "h-12 w-12 rounded-full flex items-center justify-center",
                        active
                          ? "bg-primary text-white shadow-lg"
                          : "bg-gray-200 text-gray-500"
                      )}
                    >
                      {i === 0 && <Clock />}
                      {i === 1 && <Truck />}
                      {i === 2 && <ShieldCheck />}
                    </div>
                    <p
                      className={cn(
                        "text-xs font-semibold",
                        active ? "text-primary" : "text-gray-400"
                      )}
                    >
                      {phase}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-[2.75rem] left-1/2 -translate-x-1/2 w-[85%] h-1 bg-gray-300 rounded-full">
              <div className="h-full bg-primary pipeline-progress" />
            </div>
          </div>

          {/* ITEMS */}
          <div className="bg-white rounded-2xl border shadow overflow-hidden">
            <div className="px-6 py-4 border-b flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Manifest Items</h3>
            </div>

            <div className="divide-y">
              {order.items.map((item: any, idx: number) => {
                const product = item.productId;

                return (
                  <div key={idx} className="p-4 flex gap-4 order-item">
                    <div className="h-20 w-20 rounded-xl bg-white shadow overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.quantity} Boxes × ₹{item.pricePerBox}
                      </p>
                      <div className="mt-2 font-semibold text-primary">
                        ₹{(item.quantity * item.pricePerBox).toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FINAL AUDIT */}
          <div className="rounded-2xl p-6 text-white shadow-xl
            bg-gradient-to-br from-[#1DB0A1] to-[#128f86]">
            <h3 className="flex items-center gap-2 font-semibold mb-4">
              <TrendingUp className="h-5 w-5" />
              Final Audit
            </h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Total Boxes</span>
              <span className="font-semibold">{order.totalBoxes}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Total Amount</span>
              <span className="font-semibold">
                ₹{order.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </main>

        {/* PDF BUTTON */}
        <div className="fixed bottom-4 left-0 right-0 px-4">
          <div className="max-w-xl mx-auto rounded-2xl p-1
            bg-gradient-to-r from-[#1DB0A1] to-[#128f86] shadow-2xl">
            <button
              onClick={handleGeneratePDF}
              disabled={generating}
              className="w-full py-4 rounded-xl bg-white
                text-[#128f86] font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              {generating ? "Generating PDF..." : "Download Invoice (PDF)"}
            </button>
          </div>
        </div>

        {/* PDF CONTENT */}
        <div className="hidden">
          <div ref={invoiceRef}>
            <InvoicePDF order={order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

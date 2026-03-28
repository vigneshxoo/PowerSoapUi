// src/components/invoice/InvoicePDF.tsx
import React from 'react';

type InvoicePDFProps = {
  order: {
    _id: string;
    orderId: string;
    createdAt: string | Date;
    totalAmount: number;
    totalBoxes: number;
    items: Array<{
      quantity: number;
      pricePerBox: number;
      productId: {
        _id: string;
        name: string;
        image: string;
        boxPieces: number;
      };
    }>;
  };
};

const GST_PERCENT = 18;

const InvoicePDF = ({ order }: InvoicePDFProps) => {
  const subTotal = order.totalAmount;
  const gstAmount = (subTotal * GST_PERCENT) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const grandTotal = subTotal + gstAmount;

  const invoiceDate = new Date(order.createdAt);
  const dueDate = new Date(
    invoiceDate.getTime() + 30 * 24 * 60 * 60 * 1000
  );

  return (
    // The container uses standard A4 proportions (approx 210x297mm) 
    // and forces background colors to print correctly.
    <div
      className="w-full max-w-[800px] mx-auto bg-white text-slate-900 p-10 sm:p-14 font-sans border border-slate-200 shadow-2xl relative overflow-hidden print:shadow-none print:border-none print:p-0"
      style={{ 
          fontSize: "13px",
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact" 
      }}
    >
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D11C78] to-purple-600"></div>

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-10 mt-4">
        {/* COMPANY INFO */}
        <div className="space-y-4">
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3">
             {/* If you have a logo, you can uncomment the img tag */}
             {/* <img src="/logo.png" alt="Power Soaps" className="w-12 h-12 object-contain" /> */}
             <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#D11C78] to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                PS
             </div>
            <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                POWER SOAPS
                </h1>
                <p className="text-[10px] font-bold text-[#D11C78] uppercase tracking-widest mt-1">Enterprise B2B</p>
            </div>
          </div>
          
          <div className="text-xs text-slate-500 font-medium leading-relaxed space-y-0.5">
            <p>123 Industrial Estate, Karaikkal</p>
            <p>Puducherry, India 609602</p>
            <p className="text-slate-700 font-bold mt-1">GSTIN: 33ABCDE1234F1Z5</p>
            <p>contact@powersoaps.com | +91 98765 43210</p>
          </div>
        </div>

        {/* INVOICE META */}
        <div className="text-right mt-6 sm:mt-0">
          <h2 className="text-4xl font-black text-slate-200 tracking-tighter uppercase mb-4">Invoice</h2>
          
          <table className="text-xs text-right ml-auto">
            <tbody>
                <tr>
                    <td className="font-bold text-slate-400 uppercase tracking-wider pr-4 pb-1.5">Invoice No:</td>
                    <td className="font-black text-slate-900 text-sm pb-1.5">#{order.orderId}</td>
                </tr>
                <tr>
                    <td className="font-bold text-slate-400 uppercase tracking-wider pr-4 pb-1.5">Issue Date:</td>
                    <td className="font-bold text-slate-700 pb-1.5">{invoiceDate.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                </tr>
                <tr>
                    <td className="font-bold text-slate-400 uppercase tracking-wider pr-4">Due Date:</td>
                    <td className="font-bold text-rose-500">{dueDate.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= BILL TO / SHIP TO ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        
        {/* Bill To Card */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black uppercase text-[#D11C78] tracking-widest mb-3">
            Billed To
          </p>
          <div className="text-sm text-slate-800 space-y-1">
            <p className="font-black text-base text-slate-900">Test Distributor</p>
            <p className="text-slate-600 font-medium">45 Retailer Market Road</p>
            <p className="text-slate-600 font-medium">Puducherry - 609602</p>
            <p className="text-xs text-slate-500 font-bold mt-2 pt-2 border-t border-slate-200">
              GSTIN: <span className="text-slate-800">33XYZAB5678C1D9</span>
            </p>
          </div>
        </div>

        {/* Ship To Card */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black uppercase text-[#D11C78] tracking-widest mb-3">
            Shipped To
          </p>
          <div className="text-sm text-slate-800 space-y-1">
            <p className="font-black text-base text-slate-900">Test Distributor (Warehouse)</p>
            <p className="text-slate-600 font-medium">Block B, Logistics Park</p>
            <p className="text-slate-600 font-medium">Puducherry - 609602</p>
            <p className="text-xs text-slate-500 font-bold mt-2 pt-2 border-t border-slate-200">
              Phone: <span className="text-slate-800">+91 99887 76655</span>
            </p>
          </div>
        </div>

      </div>

      {/* ================= ITEMS TABLE ================= */}
      <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
        <table className="w-full border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
                <th className="px-5 py-4 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">
                Item Description
                </th>
                <th className="px-5 py-4 text-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                Qty (Boxes)
                </th>
                <th className="px-5 py-4 text-right text-[10px] font-black uppercase tracking-widest text-slate-500">
                Rate / Box
                </th>
                <th className="px-5 py-4 text-right text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100">
                Total Amount
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
            {order.items.map((item, idx) => {
                const product = item.productId;
                const amount = item.quantity * item.pricePerBox;

                return (
                <tr key={idx} className="group">
                    <td className="px-5 py-4">
                        <p className="text-sm font-bold text-slate-900">{product.name}</p>
                        <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                            Contains {product.boxPieces * item.quantity} Pieces Total
                        </p>
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-slate-700 text-center">
                        {item.quantity}
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-slate-700 text-right">
                    ₹{item.pricePerBox.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>

                    <td className="px-5 py-4 text-sm font-black text-slate-900 text-right bg-slate-50/50">
                    ₹{amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
      </div>

      {/* ================= FINANCIAL SUMMARY ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
        
        {/* Left Side: Notes / Payment Info */}
        <div className="w-full sm:w-1/2 space-y-4">
            <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Payment Details</p>
                <div className="text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <p><span className="font-bold text-slate-800">Bank:</span> State Bank of India</p>
                    <p><span className="font-bold text-slate-800">A/C Name:</span> Power Soaps Pvt Ltd</p>
                    <p><span className="font-bold text-slate-800">A/C No:</span> 000000123456789</p>
                    <p><span className="font-bold text-slate-800">IFSC:</span> SBIN0001234</p>
                </div>
            </div>
        </div>

        {/* Right Side: Calculations */}
        <div className="w-full sm:w-80">
          <div className="space-y-3 text-sm font-medium text-slate-600 pb-4 border-b border-slate-200">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">₹{subTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span>CGST (9%)</span>
              <span>₹{cgst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span>SGST (9%)</span>
              <span>₹{sgst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className="flex justify-between items-end pt-4">
             <div>
                <p className="text-[10px] font-black uppercase text-[#D11C78] tracking-widest mb-1">Grand Total</p>
                <p className="text-xs font-bold text-slate-400">Includes 18% GST</p>
             </div>
             <span className="text-2xl font-black text-slate-900 tracking-tight">
              ₹{grandTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>

      {/* ================= FOOTER / SIGNATURE ================= */}
      <div className="flex justify-between items-end pt-12 border-t border-slate-200">
        <div className="text-xs text-slate-500 font-medium max-w-sm">
          <p className="font-bold text-slate-700 mb-1">Terms & Conditions</p>
          <p>Please pay within 30 days of receiving this invoice. Late payments may be subject to a 1.5% monthly fee.</p>
        </div>
        
        <div className="text-center">
            <div className="w-40 h-px bg-slate-300 mb-2 mx-auto"></div>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-widest">Authorized Signatory</p>
            <p className="text-[10px] text-slate-500 mt-1">Power Soaps</p>
        </div>
      </div>

    </div>
  );
};

export default InvoicePDF;
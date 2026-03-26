import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Wallet, 
    TrendingDown, 
    Phone, 
    Store,
    ChevronsLeft,
    ChevronsRight,
    FileText,
    Download
} from "lucide-react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const mokeOutstanding = [
    { code: "77710124", name: "Ramani store", type: "Bunk shop", mobile: "3226333225", contact: "Nveen Raj", amount: "2,15,212" },
    { code: "45901149", name: "Raja Store", type: "Semi Wholesale", mobile: "6633699999", contact: "Vignesh", amount: "42,500" },
];

export const ReatilerOutstandingList = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <TrendingDown className="h-3.5 w-3.5" />
                                Financial Overview
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                Out<span className="text-primary">Standing</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Track pending payments and credit limits across your retailer network.
                            </p>
                        </div>

                        {/* EXPORT ACTIONS */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-gray-900/20 hover:bg-black transition-all active:scale-95">
                                <Download className="h-4 w-4" />
                                Export Ledger
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <FileText className="h-4 w-4 text-primary" />
                                PDF Report
                            </button>
                        </div>
                    </div>

                    {/* METRICS BAR (Search Removed) */}
                    <div 
                        className="flex flex-col md:flex-row md:justify-end" 
                        data-aos="fade-up" 
                        data-aos-delay="150"
                    >
                        {/* Total Outstanding Metric Card */}
                        <div className="w-full md:w-auto px-6 py-3.5 rounded-2xl border border-primary flex items-center justify-between sm:justify-start gap-5 shadow-sm">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <Wallet className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1">Total Outstanding</p>
                                <p className="text-xl sm:text-2xl font-black text-primary leading-none">₹2,57,712.00</p>
                            </div>
                        </div>
                    </div>

                    {/* OUTSTANDING TABLE */}
                    <div 
                        className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex-1"
                        data-aos="fade-up" 
                        data-aos-delay="250"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Retailer</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Shop Type</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Contact Information</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Balance Due</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeOutstanding.map((item) => (
                                        <tr key={item.code} className="hover:bg-red-50/30 transition-colors group">
                                            {/* Retailer Info */}
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-primary text-sm hover:underline cursor-pointer transition-colors group-hover:translate-x-1">#{item.code}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Store size={14} className="text-gray-400" />
                                                    <p className="text-gray-900 font-bold text-base leading-tight">{item.name}</p>
                                                </div>
                                            </td>

                                            {/* Shop Type */}
                                            <td className="px-5 py-5 text-center">
                                                <span className="inline-flex px-3 py-1.5 rounded-lg bg-white border border-gray-100 font-black text-[10px] uppercase tracking-widest text-gray-500 shadow-sm">
                                                    {item.type}
                                                </span>
                                            </td>

                                            {/* Contact Information */}
                                            <td className="px-5 py-5">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                                                        <Phone size={14} className="text-gray-300" />
                                                        {item.mobile}
                                                    </div>
                                                    <p className="text-[11px] text-gray-400 font-semibold ml-5 uppercase tracking-wider">POC: {item.contact}</p>
                                                </div>
                                            </td>

                                            {/* Balance Due */}
                                            <td className="px-5 py-5 text-right">
                                                <div className="flex flex-col items-end">
                                                    <p className="text-xl md:text-2xl font-black text-red-500 tracking-tight">
                                                        ₹{item.amount}
                                                    </p>
                                                    <button className="mt-1 text-[10px] font-black uppercase tracking-wider text-primary hover:text-blue-700 transition-colors hover:underline underline-offset-4">
                                                        View Statement
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-t border-gray-100"
                        data-aos="fade-up" 
                        data-aos-delay="350"
                    >
                        <p className="text-sm font-medium text-gray-400 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">{mokeOutstanding.length}</span> of <span className="text-gray-900 font-bold">{mokeOutstanding.length}</span> entries
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
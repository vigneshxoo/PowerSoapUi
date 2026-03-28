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
import AOS from 'aos';
import 'aos/dist/aos.css';

const mokeOutstanding = [
    { code: "77710124", name: "Ramani store", type: "Bunk shop", mobile: "3226333225", contact: "Nveen Raj", amount: "2,15,212" },
    { code: "45901149", name: "Raja Store", type: "Semi Wholesale", mobile: "6633699999", contact: "Vignesh", amount: "42,500" },
];

export const ReatilerOutstandingList = () => {

    useEffect(() => {
        AOS.init({ 
            duration: 800, 
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#fcfdfe] to-slate-100 selection:bg-[#D11C78]/20 font-sans text-slate-900">
            
            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <TrendingDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                                Financial Overview
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-slate-900">
                                Out <span className="text-[#D11C78]">Standing</span>
                            </h1>
                            <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Track pending payments and credit limits across your retailer network.
                            </p>
                        </div>

                        {/* EXPORT ACTIONS */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-[#D11C78]/25 hover:bg-[#D11C78] hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
                                <Download className="h-4 w-4" strokeWidth={2.5} />
                                Export Ledger
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200/60 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm active:scale-95">
                                <FileText className="h-4 w-4 text-primary" strokeWidth={2.5} />
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
                        <div className="w-full md:w-auto px-6 py-4 rounded-[1.5rem] bg-white/80 backdrop-blur-xl border border-rose-100 flex items-center justify-between sm:justify-start gap-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(209,28,120,0.08)] transition-shadow duration-300">
                            <div className="h-12 w-12 rounded-2xl  flex items-center justify-center shadow-inner">
                                <Wallet className="text-primary h-6 w-6" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1.5">Total Outstanding</p>
                                <p className="text-2xl sm:text-3xl font-black text-black leading-none tracking-tight">₹2,57,712.00</p>
                            </div>
                        </div>
                    </div>

                    {/* OUTSTANDING TABLE */}
                    <div 
                        className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex-1"
                        data-aos="fade-up" 
                        data-aos-delay="200"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-slate-50/50 border-b border-slate-200/60">
                                    <tr>
                                        <th className="px-5 py-4 text-[14px] font-black uppercase text-slate-500 tracking-wider">Retailer</th>
                                        <th className="px-5 py-4 text-[14px] font-black uppercase text-slate-500 tracking-wider text-center">Shop Type</th>
                                        <th className="px-5 py-4 text-[14px] font-black uppercase text-slate-500 tracking-wider">Contact Information</th>
                                        <th className="px-5 py-4 text-[14px] font-black uppercase text-slate-500 tracking-wider text-right">Balance Due</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100/80">
                                    {mokeOutstanding.map((item) => (
                                        <tr key={item.code} className="hover:bg-rose-50/30 transition-colors duration-300 group">
                                            {/* Retailer Info */}
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-blue-500 text-sm hover:underline cursor-pointer transition-colors group-hover:translate-x-1 duration-300">#{item.code}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Store size={14} className="text-primary" />
                                                    <p className="text-slate-900 font-bold sm:text-[20px] text-base leading-tight">{item.name}</p>
                                                </div>
                                            </td>

                                            {/* Shop Type */}
                                            <td className="px-5 py-5 text-center">
                                                <span className="inline-flex px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 font-black text-[10px] sm:text-[12px] uppercase tracking-widest text-slate-500 shadow-sm group-hover:bg-white transition-colors">
                                                    {item.type}
                                                </span>
                                            </td>

                                            {/* Contact Information */}
                                            <td className="px-5 py-5">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                                                        <Phone size={14} className="text-slate-400" strokeWidth={2.5} />
                                                        {item.mobile}
                                                    </div>
                                                    <p className="text-[12px] text-slate-500 font-semibold ml-5 uppercase tracking-wider">POC: {item.contact}</p>
                                                </div>
                                            </td>

                                            {/* Balance Due */}
                                            <td className="px-5 py-5 text-right">
                                                <div className="flex flex-col items-end">
                                                    <p className="text-xl md:text-2xl font-black text-rose-500 tracking-tight">
                                                        ₹{item.amount}
                                                    </p>
                                                    <button className="mt-1 text-[10px] font-black uppercase tracking-wider text-primary hover:text-[#E82B8C] transition-colors hover:underline underline-offset-4">
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
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-slate-200/60"
                        data-aos="fade-up" 
                        data-aos-delay="300"
                    >
                        <p className="text-sm font-medium text-slate-400 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-slate-800 font-bold">1</span> to <span className="text-slate-800 font-bold">{mokeOutstanding.length}</span> of <span className="text-slate-800 font-bold">{mokeOutstanding.length}</span> entries
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-slate-200/60 bg-white/50 text-slate-300 cursor-not-allowed shadow-sm backdrop-blur-sm">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-slate-50/50 p-1 rounded-xl border border-slate-200/60 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#D11C78] text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-slate-200/60 bg-white/50 text-slate-400 hover:bg-white hover:text-[#D11C78] transition-all shadow-sm backdrop-blur-sm">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
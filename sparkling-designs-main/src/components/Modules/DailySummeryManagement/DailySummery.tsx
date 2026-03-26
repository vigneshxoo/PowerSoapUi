import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    BarChart3, 
    Search, 
    Calendar, 
    Target, 
    MapPin, 
    ChevronsLeft,
    ChevronsRight
} from "lucide-react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const mockSummary = [
    { date: "26/03/2026", distributor: "SREE ANNAMALAIYAR TRADERS - TRICHY", employee: "SALESMAN", dept: "Sales", outlets: "4/80", area: "DAILY BEAT", productivity: "20/5", amount: "2703" },
    { date: "26/03/2026", distributor: "SANTHI AGENCIES - KURINJIPADI", employee: "Skumaresan", dept: "Sales", outlets: "3/107", area: "DAILY BEAT", productivity: "15/5", amount: "595" },
    { date: "26/03/2026", distributor: "RAJA AGENCIES - SILUKKUVARPATTI", employee: "SUBBIAH", dept: "Sales", outlets: "1/30", area: "THURSDAY", productivity: "5/5", amount: "1297" },
    { date: "26/03/2026", distributor: "JEEVA MARKETING - MADURAI", employee: "R Rajendran", dept: "Sales", outlets: "9/77", area: "KARUPAURANI", productivity: "45/5", amount: "1946" },
];

export const DailySummary = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1700px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* TOP HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <BarChart3 className="h-3.5 w-3.5" />
                                Performance Analytics
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                Daily <span className="text-primary">Summary</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Track sales performance, route productivity, and outlet coverage.
                            </p>
                        </div>

                        {/* DATE RANGE & SEARCH */}
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full xl:w-auto" data-aos="fade-left" data-aos-delay="100">
                            
                            {/* Modern Date Range Picker */}
                            <div className="flex items-center bg-gray-50/50 p-1.5 gap-6 rounded-2xl border border-gray-100 shadow-sm w-full sm:w-auto">
                                <div className="relative w-full sm:w-36 group">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:scale-110 transition-transform" />
                                    <input 
                                        type="date" 
                                        className="w-full pl-9 pr-3 py-2.5 bg-transparent rounded-xl text-sm font-bold text-gray-700 outline-none focus:bg-white transition-all" 
                                        defaultValue="2026-03-26" 
                                    />
                                </div>
                                <div className="h-5 w-px bg-gray-200 mx-1 shrink-0" />
                                <div className="relative w-full sm:w-36 group">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:scale-110 transition-transform" />
                                    <input 
                                        type="date" 
                                        className="w-full pl-9 pr-3 py-2.5 bg-transparent rounded-xl text-sm font-bold text-gray-700 outline-none focus:bg-white transition-all" 
                                        defaultValue="2026-03-26" 
                                    />
                                </div>
                            </div>
                            
                            {/* Search Bar */}
                            <div className="relative w-full sm:w-64 bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100 shadow-sm">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Search distributor..." 
                                    className="w-full pl-11 pr-4 py-2.5 bg-transparent rounded-xl text-sm font-semibold outline-none focus:bg-white transition-all placeholder:text-gray-400" 
                                />
                            </div>
                        </div>
                    </div>

                  

                    {/* SUMMARY TABLE */}
                    <div 
                        className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex-1"
                        data-aos="fade-up" 
                        data-aos-delay="250"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1100px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Date</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Distributor Details</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Employee</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Outlets Covered</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Area / Beat</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Productivity</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mockSummary.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                            {/* Date */}
                                            <td className="px-5 py-5">
                                                <button className="text-primary font-bold text-sm underline underline-offset-4 hover:text-blue-700 decoration-blue-200 transition-colors">
                                                    {row.date}
                                                </button>
                                            </td>

                                            {/* Distributor */}
                                            <td className="px-5 py-5 max-w-[200px]">
                                                <p className="font-bold text-gray-900 text-xs sm:text-sm leading-tight uppercase truncate" title={row.distributor}>
                                                    {row.distributor}
                                                </p>
                                            </td>

                                            {/* Employee */}
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 font-black text-xs border border-gray-100 shadow-sm shrink-0">
                                                        {row.employee.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-bold text-gray-900 text-sm leading-none">{row.employee}</p>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{row.dept}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Outlets Covered */}
                                            <td className="px-5 py-5 text-center">
                                                <span className="inline-flex items-center justify-center px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-primary font-black text-base shadow-sm group-hover:scale-105 transition-transform">
                                                    {row.outlets}
                                                </span>
                                            </td>

                                            {/* Area / Beat */}
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-2">
                                                    <MapPin size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                                                    <span className="font-bold text-gray-700 text-xs uppercase">{row.area}</span>
                                                </div>
                                            </td>

                                            {/* Productivity */}
                                            <td className="px-5 py-5 text-center">
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 font-black text-sm shadow-sm">
                                                    <Target size={14} />
                                                    {row.productivity}
                                                </div>
                                            </td>

                                            {/* Total Amount */}
                                            <td className="px-5 py-5 text-right">
                                                <div className="flex items-center justify-end gap-1 text-slate-900 group-hover:text-primary transition-colors">
                                                    <span className="text-gray-400 font-bold text-sm group-hover:text-primary/70 transition-colors">₹</span>
                                                    <span className="text-xl font-black tracking-tight">
                                                        {row.amount}
                                                    </span>
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
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">{mockSummary.length}</span> of <span className="text-gray-900 font-bold">{mockSummary.length}</span> entries
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-300 cursor-not-allowed shadow-sm transition-all">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 shadow-sm transition-all">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
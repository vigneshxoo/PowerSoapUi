import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {
    Search,
    UserCheck,
    Phone,
    ChevronDown,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
// Assumes AOS is imported and configured globally elsewhere

const mokeRequests = [
    { id: 1, code: "77710124", name: "Ramani store", type: "Bunk shop", mobile: "3226333225", contact: "Nveen Raj", date: "2026-01-08 10:21:08", status: "Approved" },
    { id: 2, code: "45901149", name: "Raja Store", type: "Semi Wholesale", mobile: "6633699999", contact: "-", date: "2026-01-08 10:20:41", status: "Approved" },
    { id: 4, code: "64973496", name: "Test Shop2", type: "Medical shop", mobile: "6369996333", contact: "-", date: "2026-01-06 12:36:43", status: "Rejected" },
    { id: 6, code: "10356495", name: "Limra store", type: "Retailer", mobile: "1234567890", contact: "-", date: "2023-09-26 17:49:19", status: "Pending" },
];

export const Reatiler_Request = () => {
    return (
        <div className="min-h-screen bg-gray-50/30">

            <main className="lg:ml-64 min-h-screen flex flex-col">

                {/* RESPONSIVE PADDING: Standardized scale */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8">

                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <UserCheck className="h-3.5 w-3.5" />
                                Registration Desk
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Retailer <span className="text-[#D11C78]">Requests</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium max-w-xl">
                                Review and manage new store registration applications.
                            </p>
                        </div>

                        {/* STATUS FILTER BAR - Scaled down for a sleeker profile */}
                        <div className="flex flex-wrap p-1.5 bg-gray-50/80 rounded-2xl border border-gray-200 gap-1 sm:gap-2" data-aos="fade-left" data-aos-delay="100">
                            {['All', 'Approved', 'Pending', 'Rejected'].map((status) => (
                                <button
                                    key={status}
                                    className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${status === 'All'
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-transparent text-gray-500 hover:text-primary hover:bg-white'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="relative w-full md:w-[26rem]" data-aos="fade-up" data-aos-delay="150">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by store or owner name..."
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold text-slate-900 placeholder:text-gray-400 shadow-sm"
                        />
                    </div>

                    {/* REQUESTS TABLE */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        {/* Standardized Header Padding */}
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider">S.No</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider">Retailer Information</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider">Contact Details</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider">Applied Date</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider ">Licencse NUM</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-gray-500 tracking-wider text-right">Status Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeRequests.map((req) => (
                                        <tr key={req.code} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="px-5 py-5">
                                                <span className="font-black text-blue-500 text-sm group-hover:text-primary transition-colors">
                                                    {String(req.id).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="space-y-1">
                                                    <p className="font-bold text-gray-900 text-sm md:text-[19px] leading-tight">{req.name}</p>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-primary font-bold text-sm text-[11px]">#{req.code}</span>
                                                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                                                        <span className="text-gray-600 font-bold text-[11px] uppercase tracking-wider">{req.type}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
                                                        <Phone size={15} className="text-gray-400" />
                                                        {req.mobile}
                                                    </div>
                                                    <p className="text-[13px] text-gray-600 font-semibold ml-5 uppercase tracking-wider">POC: {req.contact}</p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex flex-col">
                                                    <p className="font-bold text-gray-800 text-sm">{req.date.split(' ')[0]}</p>
                                                    <p className="text-[12px] text-gray-500 font-medium mt-0.5">{req.date.split(' ')[1]}</p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex flex-col">
                                                    <p className="font-bold text-gray-800 text-sm">{req.date.split(' ')[0]}</p>
                                                    <p className="text-[12px] text-gray-500 font-medium mt-0.5">{req.date.split(' ')[1]}</p>
                                                </div>
                                            </td>


                                            <td className="px-5 py-5 text-right">
                                                {/* Fixed syntax and scaled down the dropdown button */}
                                                <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                                                    <span className={`px-4 py-2 text-[10px] sm:text-[12px] font-black uppercase tracking-wider ${req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' :
                                                        req.status === 'Rejected' ? 'bg-rose-50 text-rose-600' :
                                                            'bg-orange-50 text-orange-600'
                                                        }`}>
                                                        {req.status}
                                                    </span>
                                                    <button className="px-2.5 py-2 bg-gray-50 hover:bg-gray-100 border-l border-gray-200 text-gray-500 transition-colors">
                                                        <ChevronDown size={14} />
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
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-t border-gray-200" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-sm font-medium text-gray-500 order-2 lg:order-1">
                            Showing <span className="text-gray-900 font-bold">1-4</span> of <span className="text-gray-900 font-bold">4</span> requests
                        </p>

                        <div className="flex items-center gap-2 order-1 lg:order-2">
                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</span>
                            </div>
                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
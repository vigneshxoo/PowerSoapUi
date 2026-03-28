import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {
    TicketPercent,
    Plus,
    FileText,
    Download,
    Search,
    Edit3,
    Power,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Mock data based on your image
const mokeschemes = [
    {
        _id: "SCH001",
        image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg",
        schemeName: "Buy 10 Box get 2 Box free",
        productName: "Tyko Liquid Pouch 6L x 2Pcs MRP 480.",
        buy: 10,
        get: 2,
        freeItem: "Tyko Liquid Pouch 6L x 2Pcs MRP 480.",
        status: "Active"
    }
];

export const Schemes = () => {
    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* <Sidebar /> */}

            <main className="lg:ml-64 flex flex-col min-h-screen">
                {/* <Header /> */}

                <div className="flex-1 p-4 sm:p-8 lg:p-12 max-w-[1440px] mx-auto w-full space-y-8">

                    {/* HERO & ACTIONS */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs lg:text-sm font-bold uppercase mb-4">
                                <TicketPercent className="h-3.5 w-3.5" />
                                Promotional Offers
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900">
                                Scheme <span className="text-[#D11C78] ">Management</span>
                            </h1>
                            <p className="text-slate-500 font-medium text-base">
                                Total Schemes Active: <span className="text-slate-900 font-bold">1</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          
                            <div className="flex bg-white rounded-2xl border border-slate-200 p-1">
                                <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-600 flex items-center gap-2 px-4 text-sm font-bold">
                                    <FileText className="h-4 w-4" /> PDF
                                </button>
                                <div className="w-[1px] bg-slate-100 my-2"></div>
                                <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-600 flex items-center gap-2 px-4 text-sm font-bold">
                                    <Download className="h-4 w-4" /> CSV
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FILTERS & SEARCH */}
                    {/* <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search schemes or products..."
                                className="w-full pl-12 pr-4 py-4 rounded-[1.5rem] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all bg-white"
                            />
                        </div>
                    </div> */}

                    {/* SCHEME TABLE */}
                    <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50/80 border-b border-slate-100">
                                    <tr>
                                        {["Image", "Scheme Name", "Product Name", "Buy", "Get", "Free Item"].map((header) => (
                                            <th key={header} className="whitespace-nowrap px-6 py-5 text-xs font-bold uppercase text-slate-500 tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {mokeschemes.map((s) => (
                                        <tr key={s._id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-6 py-6">
                                                <div className="w-14 h-14 rounded-lg border border-slate-100 overflow-hidden bg-slate-50">
                                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform' src={s.image} alt="Scheme" />
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 font-bold text-slate-900 text-sm min-w-[200px]">
                                                {s.schemeName}
                                            </td>
                                            <td className="px-6 py-6 text-slate-500 text-sm font-medium min-w-[250px]">
                                                {s.productName}
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className="font-black text-lg text-slate-800">{s.buy}</span>
                                            </td>
                                            <td className="px-6 py-6 text-center">
                                                <span className="font-black text-lg text-slate-800">{s.get}</span>
                                            </td>
                                            <td className="px-6 py-6 text-slate-600 text-sm italic font-medium min-w-[250px]">
                                                {s.freeItem}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex items-center justify-between pb-10 px-2">
                        <p className="text-sm font-bold text-slate-400">
                            Showing <span className="text-slate-900">1</span> of <span className="text-slate-900">1</span> entries
                        </p>
                        <div className="flex gap-2">
                            <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 cursor-not-allowed">
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <span className="h-10 w-10 flex items-center justify-center rounded-xl text-white bg-[#00B1A1] text-xs font-black shadow-md shadow-blue-100">1</span>
                            <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 cursor-not-allowed">
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
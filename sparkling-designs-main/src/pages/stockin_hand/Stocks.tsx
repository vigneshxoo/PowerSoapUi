import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {
    Package,
    Clock,
    ShoppingBag,
    IndianRupee,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import { mokeproducts } from '@/data/products';

export const Stocks = () => {
    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* <Sidebar /> */}

            <main className="lg:ml-64 flex flex-col min-h-screen">
                {/* <Header /> */}
                
                {/* Main Content Container */}
                <div className="flex-1 p-4 sm:p-8 lg:p-12 max-w-[1440px] mx-auto w-full space-y-8 lg:space-y-12">
                    
                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs lg:text-sm font-bold uppercase mb-4">
                                <Clock className="h-3.5 w-3.5" />
                                Stock & Tracking
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                                Stock In <span className="text-primary">Hand</span>
                            </h1>
                            <p className="text-slate-500 mt-3 text-base lg:text-lg font-medium">
                                Track all past stocks with complete details, pricing, and quantities.
                            </p>
                        </div>

                        {/* STATS - Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full xl:w-auto xl:gap-16 2xl:gap-7">
                            {[
                                { label: "Total Stocks", value: 12, icon: ShoppingBag },
                                { label: "Total Boxes", value: 11, icon: Package },
                                { label: "Total Pieces", value: 12, icon: IndianRupee },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="p-4 lg:p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex xl:gap-5 2xl:flex-row gap-4 items-center xl:items-start 2xl:items-center min-w-[180px]"
                                >
                                    <div className="p-3 lg:p-4 rounded-2xl bg-slate-50">
                                        <s.icon className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] lg:text-xs text-slate-400 uppercase font-bold tracking-widest">
                                            {s.label}
                                        </p>
                                        <p className="text-2xl lg:text-3xl font-black text-slate-900">{s.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TABLE SECTION */}
                    <div className="bg-white sm:    rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/50 border-b border-slate-100">
                                    <tr>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider">ID</th>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider">Preview</th>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider">Item Name</th>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider">Division</th>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider text-center">In Hand</th>
                                        <th className="whitespace-nowrap px-6 lg:px-8 py-5 text-xs lg:text-sm font-bold uppercase text-slate-500 tracking-wider text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {mokeproducts.map((o) => (
                                        <tr key={o._id} className="group hover:bg-slate-50/80 transition-colors">
                                            <td className="px-6 lg:px-8 py-6 font-bold text-primary text-base lg:text-lg">
                                                #{o._id.slice(-4)}
                                            </td>
                                            <td className="px-6 lg:px-8 py-6">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl border border-slate-100 overflow-hidden bg-slate-50">
                                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src={o.image} alt={o.name} />
                                                </div>
                                            </td>
                                            <td className="px-6 lg:px-8 py-6">
                                                <p className="font-semibold text-slate-900 text-sm lg:text-base line-clamp-1">{o.name}</p>
                                            </td>
                                            <td className="px-6 lg:px-8 py-6">
                                                <span className="text-slate-500 text-sm font-medium">{o.division}</span>
                                            </td>
                                            <td className="px-6 lg:px-8 py-6 text-center">
                                                <span className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-base">
                                                    {o.mfs} <span className="text-[10px] opacity-60 uppercase">qty</span>
                                                </span>
                                            </td>
                                            <td className="px-6 lg:px-8 py-6 text-right">
                                                <p className="font-black text-xl lg:text-2xl text-slate-900">₹{o.boxPrice}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION SECTION */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center pb-12">
                        <p className="text-sm lg:text-base font-bold text-slate-400 order-2 md:order-1">
                            Showing <span className="text-slate-900">10</span> of <span className="text-slate-900">120</span> products
                        </p>

                        <div className="flex items-center gap-2 lg:gap-3 order-1 md:order-2">
                            <div className="flex items-center gap-1.5 mr-2">
                                <button className="p-2.5 lg:p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all">
                                    <ChevronsLeft className="h-5 w-5 text-slate-600" />
                                </button>
                                <button className="p-2.5 lg:p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all">
                                    <ChevronLeft className="h-5 w-5 text-slate-600" />
                                </button>
                            </div>
                            
                            <div className="flex gap-1.5">
                                <span className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-xl bg-primary text-white font-black text-sm lg:text-base shadow-md shadow-primary/20">1</span>
                                <span className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 font-bold text-sm lg:text-base cursor-pointer hover:bg-slate-50">2</span>
                            </div>

                            <div className="flex items-center gap-1.5 ml-2">
                                <button className="p-2.5 lg:p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all">
                                    <ChevronRight className="h-5 w-5 text-slate-600" />
                                </button>
                                <button className="p-2.5 lg:p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all">
                                    <ChevronsRight className="h-5 w-5 text-slate-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
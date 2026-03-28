import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {  } from '@/components/layout/ordermanagement/OrderM_Sidebar';
import { order_management_Nav } from '@/components/layout/navconfig/navConfig';
import {
    Search,
    Calendar,
    ChevronsLeft,
    ChevronsRight,
    ClipboardList,
    Store
} from "lucide-react";
// import { OrderManagementSidebar } from '@/components/layout/ordermanagement/OrderM_Sidebar';

const mokeOrders = [
    { id: "ORD-R38979413", dateTime: "05/02/2026 12:58 PM", shopName: "Raja Store", takenBy: "TEST DISTRIBUTOR", items: 0, paid: 0, outstanding: 0, status: "Completed", deliveredOn: "06/02/2026 12:54 PM" },
    { id: "ORD-R36935408", dateTime: "08/01/2026 10:31 AM", shopName: "Ramani store", takenBy: "TEST DISTRIBUTOR", items: 2, paid: 0, outstanding: 4262, status: "Completed", deliveredOn: "08/01/2026 10:38 AM" },
    { id: "ORD-R53213474", dateTime: "08/01/2026 10:30 AM", shopName: "Ramani store", takenBy: "TEST DISTRIBUTOR", items: 4, paid: 0, outstanding: 59, status: "Completed", deliveredOn: "05/02/2026 05:12 PM" },
];

export const SalesOrder = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* <OrderManagementSidebar /> */}

            <main className="lg:ml-64 min-h-screen flex flex-col">
                {/* <Header  navItems={order_management_Nav}/> */}

                {/* RESPONSIVE PADDING: tighter on desktop so it doesn't look overly expanded on 2xl */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8">

                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <ClipboardList className="h-3.5 w-3.5" />
                                Sales Tracking
                            </div>
                            {/* Adjusted Font Sizes: Scales smoothly from 2xl to 5xl, removing the oversized 6xl */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Sales <span className="text-[#D11C78]">Orders</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium max-w-xl">
                                Detailed overview of all store transactions and delivery statuses.
                            </p>
                        </div>

                        {/* DATE FILTER - Scaled down padding and font sizes for a sleeker look */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 w-full xl:w-auto" data-aos="fade-left" data-aos-delay="100">
                            <div className="relative group">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary group-focus-within:scale-110 transition-transform" />
                                <input type="text" placeholder="From Date" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
                            </div>
                            <div className="relative group">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary group-focus-within:scale-110 transition-transform" />
                                <input type="text" placeholder="To Date" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* SEARCH & ENTRIES BAR */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="150">
                       
                        <p className="text-sm font-bold text-gray-400 order-1 md:order-2">
                            Total Orders: <span className="text-gray-900">48</span>
                        </p>
                    </div>

                    {/* TABLE CONTAINER */}
                    {/* Changed rounded-[2.5rem] to rounded-2xl for a more standard dashboard feel */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                        <div className="overflow-x-auto">
                            {/* Adjusted min-w to allow better fitting on laptops before scrolling */}
                            <table className="w-full text-left min-w-[900px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        {/* Reduced header padding from py-7 px-8 to py-4 px-6 */}
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider">Order Info</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider">Store Details</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider text-center">Items</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider text-center">Paid</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider text-right">Outstanding</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider text-center">Status</th>
                                        <th className="px-5 py-4 text-[13px] font-black uppercase text-slate-500 tracking-wider text-right">Delivered On</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeOrders.map((o, index) => (
                                        <tr key={o.id} className="cursor-pointer hover:bg-blue-50/40 transition-colors group">
                                            {/* Scaled down table cells padding and fonts */}
                                            <td className="px-5 py-5">
                                                {/* Fixed ID array render issue */}
                                                <p className="font-bold text-blue-500 text-sm md:text-base group-hover:translate-x-1 transition-transform">
                                                    #{o.id.split('-')[1] || o.id}
                                                </p>
                                                <p className="text-[11px] text-gray-400 font-semibold mt-1 uppercase leading-none">{o.dateTime}</p>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 rounded-xl bg-gray-50 text-primary group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100">
                                                        <Store className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">{o.shopName}</p>
                                                        <p className="text-[10px] text-gray-400 font-bold mt-0.5 uppercase tracking-wide">{o.takenBy}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-center">
                                                <span className="inline-flex items-baseline px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800 font-bold text-sm">
                                                    {o.items} <span className="text-[10px] text-gray-500 uppercase ml-1">qty</span>
                                                </span>
                                            </td>
                                               <td className="px-5 py-5 text-center">
                                                <span className="inline-flex items-baseline px-3 py-1.5 rounded-xl bg-gray-100  text-emerald-600 font-bold text-[18px]">
                                                    {1232} 
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 text-right">
                                                {/* Scaled down outstanding font from text-2xl to text-lg */}
                                                <p className={`text-base md:text-lg font-black ${o.outstanding > 0 ? 'text-rose-600' : 'text-slate-900'}`}>
                                                    ₹{o.outstanding.toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-center">
                                                <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[13px] font-bold uppercase tracking-wider">
                                                    {o.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 text-right">
                                                {/* Fixed date splitting array issue */}
                                                <div className="flex flex-col items-end">
                                                    <p className="font-bold text-gray-900 text-sm">{o.deliveredOn.split(' ')[0]}</p>
                                                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                                                        {o.deliveredOn.split(' ').slice(1).join(' ')}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION SECTION */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-t border-gray-100" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-sm font-medium text-gray-400 order-2 lg:order-1">
                            Showing <span className="text-gray-900 font-bold">1-3</span> of <span className="text-gray-900 font-bold">48</span> transactions
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 order-1 lg:order-2">
                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-95">
                                <ChevronsLeft className="h-4 w-4 text-gray-500" />
                            </button>

                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</span>
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-transparent text-gray-500 font-medium text-sm cursor-pointer hover:bg-white hover:text-primary hover:shadow-sm transition-all">2</span>
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-transparent text-gray-500 font-medium text-sm cursor-pointer hover:bg-white hover:text-primary hover:shadow-sm transition-all">3</span>
                            </div>

                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-95">
                                <ChevronsRight className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
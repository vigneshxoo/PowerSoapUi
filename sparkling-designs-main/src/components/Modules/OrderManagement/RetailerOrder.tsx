import React from 'react';
import {
    Search,
    Calendar,
    Truck,
    ChevronsLeft,
    ChevronsRight,
    Store,
    Inbox
} from "lucide-react";

// Keeping the array empty to show the "No Data" state
const mokeVanOrders = [{
    ordernumber: "ORD-R44946151",
    dateTime: "30/4/2003",
    time: "10:45AM",
    shopname: "vignesh stors",
    Salesman: "ajithkumar",
    items: 34,
    paidAmonut: 23,
    outstandingAmonut: 2456,


},
{
    ordernumber: "ORD-R44946151",
    dateTime: "30/4/2003",
    time: "10:45AM",
    shopname: "Manikam stors",
    Salesman: "ajithkumar",
    items: 84,
    paidAmonut: 23,
    outstandingAmonut: 2456,


},
{
    ordernumber: "ORD-R44946151",
    dateTime: "30/4/2003",
    time: "10:45AM",
    shopname: "Ajith stors",
    Salesman: "arun kumar",
    items: 94,
    paidAmonut: 23,
    outstandingAmonut: 2459,


}];

export const RetailerOrder = () => {
    return (
        <div className="min-h-screen bg-white">


            <main className="lg:ml-64 min-h-screen flex flex-col">

                {/* RESPONSIVE PADDING: tighter on desktop for better ultra-wide scaling */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8">

                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full  borderbg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase mb-1">
                                <Truck className="h-3.5 w-3.5" />
                                Retailer Tracking
                            </div>
                            {/* Adjusted Font Sizes: Scales smoothly from mobile to 2xl */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Reatiler <span className="text-primary">Orders</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium max-w-xl">
                                Real-time tracking of orders assigned to delivery vans.
                            </p>
                        </div>

                        {/* DATE FILTERS - Scaled down for a sleeker look */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 w-full xl:w-auto">
                            <div className="relative group">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                                <input type="text" placeholder="From Date" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
                            </div>
                            <div className="relative group">
                                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                                <input type="text" placeholder="To Date" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* <div className="relative w-full md:w-[22rem] order-2 md:order-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input type="text" placeholder="Search orders or salesman..." className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                        </div> */}
                        <p className="text-sm font-bold text-gray-400 order-1 md:order-2">
                            Total Orders: <span className="text-gray-900">{mokeVanOrders.length}</span>
                        </p>
                    </div>

                    {/* TABLE AREA */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                        <div className="overflow-x-auto">
                            {/* Adjusted min-w to prevent unnecessary scrolling on standard laptops */}
                            <table className="w-full text-left min-w-[900px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Order Number</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Date & Time</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Shop Name</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Salesman</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Items</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Paid Amonut</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Outstanding</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Delivery</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeVanOrders.length > 0 ? (
                                        mokeVanOrders.map((o) => (
                                            <tr key={o.ordernumber} className="cursor-pointer hover:bg-blue-50/40 transition-colors group">
                                                <td className="px-5 py-5 font-bold text-primary text-sm md:text-base">#{o.ordernumber}</td>
                                                <td className="px-5 py-5 text-gray-500 text-sm font-medium">{o.dateTime}</td>
                                                <td className="px-5 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <Store className="h-4 w-4 text-gray-400" />
                                                        <span className="font-bold text-gray-900 text-sm md:text-base">{o.shopname}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-center text-sm font-semibold text-gray-600">{o.Salesman}</td>
                                                <td className="px-5 py-5 text-center">
                                                    <span className="px-3 py-1.5 rounded-xl bg-gray-100 text-sm font-bold">{o.items}</span>
                                                </td>
                                                <td className="px-5 py-5 text-right font-black text-base md:text-lg text-rose-500">₹{o.outstandingAmonut}</td>
                                                <td className="px-5 py-5 text-center">
                                                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">Completed</span>
                                                </td>
                                                <td className="px-5 flex flex-col gap-1 py-5 text-gray-500 text-sm font-medium">{o.dateTime} <span>{o.time}</span></td>

                                            </tr>
                                        ))
                                    ) : (
                                        /* OPTIMIZED NO DATA STATE */
                                        <tr>
                                            <td colSpan={7} className="px-5 py-24 text-center">
                                                <div className="flex flex-col items-center justify-center space-y-4">
                                                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                                        <Inbox className="h-10 w-10 text-gray-300" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <p className="text-lg font-bold text-gray-900">No van orders found</p>
                                                        <p className="text-gray-400 font-medium text-sm">Try adjusting your search or date filters.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-400 order-2 lg:order-1">
                            Showing <span className="text-gray-900 font-bold">0</span> to <span className="text-gray-900 font-bold">0</span> of <span className="text-gray-900 font-bold">0</span> entries
                        </p>

                        <div className="flex items-center gap-2 order-1 lg:order-2">
                            <button className="p-2.5 rounded-xl bg-white text-gray-300 cursor-not-allowed border border-gray-200 shadow-sm">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>

                            <div className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</span>
                            </div>

                            <button className="p-2.5 rounded-xl bg-white text-gray-300 cursor-not-allowed border border-gray-200 shadow-sm">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Search, 
    Calendar, 
    History,
    ArrowUpDown,
    Store
} from "lucide-react";
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const mockOrderHistory = [
    { id: "ORD-R49692151", dateTime: "26/03/2026 11:27 AM", shopName: "Ramani store", salesman: "TEST DISTRIBUTOR", items: 0, paid: 0, outstanding: 0, status: "Cancelled", deliveredOn: "26/03/2026 11:27 AM" },
    { id: "ORD-R54526747", dateTime: "26/03/2026 11:24 AM", shopName: "Ramani store", salesman: "TEST DISTRIBUTOR", items: 1, paid: 0, outstanding: 210834, status: "Completed", deliveredOn: "26/03/2026 11:25 AM" },
    { id: "ORD-R36935408", dateTime: "08/01/2026 10:31 AM", shopName: "Ramani store", salesman: "TEST DISTRIBUTOR", items: 2, paid: 0, outstanding: 4262, status: "Completed", deliveredOn: "08/01/2026 10:38 AM" },
    { id: "ORD-R53213474", dateTime: "08/01/2026 10:30 AM", shopName: "Ramani store", salesman: "TEST DISTRIBUTOR", items: 4, paid: 0, outstanding: 59, status: "Completed", deliveredOn: "05/02/2026 05:12 PM" },
    { id: "ORD-R21735564", dateTime: "08/01/2026 10:30 AM", shopName: "Ramani store", salesman: "TEST DISTRIBUTOR", items: 4, paid: 0, outstanding: 59, status: "Completed", deliveredOn: "24/02/2026 12:00 PM" },
];

// Helper to split date and time for better modern typography
const formatDateTime = (dateTimeStr: string) => {
    const [date, time, period] = dateTimeStr.split(' ');
    return { date, time: `${time} ${period}` };
};

export const Reatiler_Manage_OrderHistory = () => {
    
    // Make sure AOS is initialized in your app!
    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">

                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1800px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">

                    {/* TOP ROW: TITLE (Left) & FILTERS (Right) */}
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6">
                        
                        {/* Title and Count area */}
                        <div className="space-y-3" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <History className="h-3.5 w-3.5" />
                                Transactions
                            </div>
                            
                            {/* Flex container holding Title AND the Total Count pill */}
                            <div className="flex flex-wrap items-center gap-4">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                    Order <span className="text-[#D11C78]">History</span>
                                </h1>
                                <div className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-xl">
                                    <span className="text-xs sm:text-sm font-black text-gray-600 uppercase tracking-wider">
                                        Total Order - <span className="text-primary ml-1">{mockOrderHistory.length}</span>
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl">
                                Review past transactions, tracking statuses, and outstanding balances.
                            </p>
                        </div>

                        {/* Search and Calendar Filters - Pushed to the right */}
                        <div 
                            className="flex flex-col md:flex-row items-center gap-3 w-full xl:w-auto justify-end" 
                            data-aos="fade-left" 
                            data-aos-delay="100"
                        >
                            {/* Combined Date Filters */}
                            <div className="flex items-center bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm w-full md:w-auto">
                                <div className="relative w-full md:w-40 group">
                                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary group-focus-within:scale-110 transition-transform" />
                                    <input 
                                        type="text" 
                                        placeholder="From Date" 
                                        className="w-full pl-10 pr-3 py-2.5 bg-transparent rounded-xl text-sm font-semibold outline-none focus:bg-gray-50 transition-all placeholder:text-gray-400" 
                                    />
                                </div>
                                <div className="w-px h-6 bg-gray-200 mx-1"></div>
                                <div className="relative w-full md:w-40 group">
                                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary group-focus-within:scale-110 transition-transform" />
                                    <input 
                                        type="text" 
                                        placeholder="To Date" 
                                        className="w-full pl-10 pr-3 py-2.5 bg-transparent rounded-xl text-sm font-semibold outline-none focus:bg-gray-50 transition-all placeholder:text-gray-400" 
                                    />
                                </div>
                            </div>

                            {/* Search Bar */}
                           
                        </div>
                    </div>

                    {/* ORDER HISTORY TABLE */}
                    <div 
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1" 
                        data-aos="fade-up" 
                        data-aos-delay="200"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1100px]">
                                <thead className="bg-gray-50/80 border-b border-gray-100">
                                    <tr>
                                        {[
                                            'Order Number', 'Date & Time', 'Shop Name',
                                            'Salesman', 'Items', 'Paid Amount',
                                            'Outstanding Amount', 'Delivery', 'Delivered On'
                                        ].map((header) => (
                                            <th key={header} className="px-5 py-4 text-[11px] sm:text-[13px] font-black uppercase text-gray-500 tracking-wider group cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap">
                                                <div className="flex items-center gap-1.5">
                                                    {header}
                                                    <ArrowUpDown size={12} className="text-gray-300 group-hover:text-primary transition-colors" />
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mockOrderHistory.map((order) => {
                                        const orderDt = formatDateTime(order.dateTime);
                                        const deliveryDt = formatDateTime(order.deliveredOn);

                                        return (
                                            <tr key={order.id} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="px-5 py-4">
                                                    <span className="font-bold text-blue-500 text-sm hover:underline cursor-pointer transition-colors whitespace-nowrap">
                                                        {order.id}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex flex-col whitespace-nowrap">
                                                        <span className="font-bold text-gray-900 text-sm">{orderDt.date}</span>
                                                        <span className="text-[11px] text-gray-400 font-semibold">{orderDt.time}</span>
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-2.5 min-w-[120px]">
                                                        <Store size={14} className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
                                                        <span className="font-bold text-gray-900 text-sm truncate">{order.shopName}</span>
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="font-semibold text-gray-600 text-xs uppercase tracking-wider whitespace-nowrap">
                                                        {order.salesman}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="inline-flex px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-black text-gray-700">
                                                        {order.items}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="font-bold text-gray-900 text-sm whitespace-nowrap">₹{order.paid}</span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className={`font-black sm:text-[19px] whitespace-nowrap ${order.outstanding > 0 ? 'text-rose-500' : 'text-gray-900'}`}>
                                                        {order.outstanding > 0 ? `₹${order.outstanding.toLocaleString('en-IN')}` : '0'}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className={`inline-flex px-3 py-1.5 rounded-lg text-[10px] sm:text-[12px] font-black uppercase tracking-widest whitespace-nowrap ${
                                                        order.status === 'Completed'
                                                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                                            : 'bg-rose-50 text-rose-600 border border-rose-100'
                                                    }`}>
                                                        {order.status}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex flex-col whitespace-nowrap">
                                                        <span className="font-bold text-gray-900 text-sm">{deliveryDt.date}</span>
                                                        <span className="text-[11px] text-gray-400 font-semibold">{deliveryDt.time}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-t border-gray-200"
                        data-aos="fade-up" 
                        data-aos-delay="300"
                    >
                        <p className="text-sm font-medium text-gray-500 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">5</span> of <span className="text-gray-900 font-bold">5</span> entries
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-primary transition-all text-sm font-bold shadow-sm">
                                Previous
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-500 transition-all text-sm font-bold shadow-sm cursor-not-allowed opacity-50">
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}